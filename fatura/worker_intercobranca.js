addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const url = new URL(event.request.url);
  const codigoSolicitacao = url.searchParams.get('codigoSolicitacao');

  if (!codigoSolicitacao) {
    return new Response(JSON.stringify({ error: 'Missing codigoSolicitacao parameter' }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  let tokenResponse = await getCachedAccessToken();
  if (tokenResponse.error || !tokenResponse.accessToken) {
    tokenResponse = await getAccessToken();
    if (!tokenResponse.error) {
      await TOKEN_STORAGE.put('access_token', tokenResponse.accessToken, { expirationTtl: tokenResponse.expires_in });
    }
  }

  if (tokenResponse.error) {
    return new Response(JSON.stringify(tokenResponse), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  const cobrancaResponse = await getCobrancaInfo(codigoSolicitacao, tokenResponse.accessToken);
  const jsonResponse = JSON.stringify(cobrancaResponse);

  return new Response(jsonResponse, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

async function getCachedAccessToken() {
  const accessToken = await TOKEN_STORAGE.get('access_token');
  if (accessToken) {
    return { accessToken: accessToken };
  } else {
    return { error: 'No cached token found' };
  }
}

async function getAccessToken() {
  const url = 'https://cdpj.partners.bancointer.com.br/oauth/v2/token';
  const body = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&scope=boleto-cobranca.read&grant_type=client_credentials`;
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  try {
    const response = await MY_CERT.fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    const responseText = await response.text();
    if (!response.ok) {
      return { error: `Failed to retrieve access token: ${response.statusText}`, status: response.status, responseText: responseText };
    }

    const data = JSON.parse(responseText);
    return { accessToken: data.access_token, expires_in: data.expires_in, rawResponse: data };
  } catch (error) {
    return { error: `Error fetching access token: ${error.message}` };
  }
}

async function getCobrancaInfo(codigoSolicitacao, accessToken) {
  const url = `https://cdpj.partners.bancointer.com.br/cobranca/v3/cobrancas/${codigoSolicitacao}`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'x-conta-corrente': CONTA_CORRENTE,
  };

  try {
    const response = await MY_CERT.fetch(url, {
      method: 'GET',
      headers: headers,
    });

    const responseText = await response.text();
    if (!response.ok) {
      return { error: `Failed to retrieve cobranca info: ${response.statusText}`, status: response.status, responseText: responseText };
    }

    const data = JSON.parse(responseText);
    return { cobrancaInfo: data };
  } catch (error) {
    return { error: `Error fetching cobranca info: ${error.message}` };
  }
}
