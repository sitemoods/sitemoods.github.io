addEventListener('fetch', event => {
    event.respondWith(handleRequest(event));
  });
  
  async function handleRequest(event) {
    const url = new URL(event.request.url);
    const codigoSolicitacao = url.searchParams.get('codigoSolicitacao');
  
    if (!codigoSolicitacao) {
      return new Response(
        JSON.stringify({ error: 'Missing codigoSolicitacao parameter' }),
        { headers: defaultHeaders() }
      );
    }
  
    let responsePayload = { cobrancaInfo: null, cieloLink: null, logs: {} };
  
    try {
      const tokenResponse = await getCachedAccessToken();
      if (tokenResponse.error) {
        throw new Error(tokenResponse.error);
      }
  
      const cobrancaInfo = await getCobrancaInfo(codigoSolicitacao, tokenResponse.accessToken);
      if (cobrancaInfo.error) {
        responsePayload.logs["inter.log"] = cobrancaInfo.error;
        throw new Error('Erro ao buscar dados da cobrança no Banco Inter');
      }
  
      responsePayload.cobrancaInfo = cobrancaInfo;
  
      const cieloResponse = await gerarLinkCielo(cobrancaInfo.cobranca);
      if (cieloResponse.error) {
        responsePayload.logs["cielo.log"] = cieloResponse.error;
        throw new Error('Erro ao gerar link de pagamento na Cielo');
      }
  
      responsePayload.cieloLink = cieloResponse.settings.checkoutUrl;
  
    } catch (error) {
      responsePayload.logs["generalError"] = error.message;
    }
  
    return new Response(JSON.stringify(responsePayload), { headers: defaultHeaders() });
  }
  
  async function getCachedAccessToken() {
    const accessToken = await TOKEN_STORAGE.get('access_token');
    return accessToken ? { accessToken } : { error: 'No cached token found' };
  }
  
  async function getAccessToken() {
    const url = 'https://cdpj.partners.bancointer.com.br/oauth/v2/token';
    const body = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&scope=boleto-cobranca.read&grant_type=client_credentials`;
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  
    try {
      const response = await MY_CERT.fetch(url, { method: 'POST', headers, body });
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Failed to retrieve access token');
      }
      return { accessToken: data.access_token, expires_in: data.expires_in };
    } catch (error) {
      return { error: `Error fetching access token: ${error.message}` };
    }
  }
  
  async function getCobrancaInfo(codigoSolicitacao, accessToken) {
    const url = `https://cdpj.partners.bancointer.com.br/cobranca/v3/cobrancas/${codigoSolicitacao}`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'x-conta-corrente': CONTA_CORRENTE,
    };
  
    try {
      const response = await MY_CERT.fetch(url, { method: 'GET', headers });
      const responseText = await response.text(); 
      if (!response.ok) {
        return { 
          error: responseText
        };
      }
      const data = JSON.parse(responseText);
      return data;
    } catch (error) {
      return { error: `Error fetching cobranca info: ${error.message}` };
    }
  }
  
  async function gerarLinkCielo(cobranca) {
    const dateString = `${cobranca.dataEmissao}`; 
    const date = new Date(dateString); 
    const options = { month: 'long' }; 
    const monthName = new Intl.DateTimeFormat('pt-BR', options).format(date); 

console.log(monthName); // Saída: "Outubro"

    const url = 'https://cieloecommerce.cielo.com.br/api/public/v1/orders/';
    const payload = {
      Cart: {
        Items: [
          {
            Name: `Moods.com.br [${monthName}]`,
            Description: `Fatura ID: ${cobranca.seuNumero}`,
            UnitPrice: cobranca.valorNominal * 100,
            Quantity: 1,
            Type: 'Digital',
          },
        ],
      },
      Payment: {
        MaxNumberOfInstallments: 1
    },
      Shipping: {
        Type: `WithoutShipping`
      },
      OrderNumber: cobranca.seuNumero,
      SoftDescriptor: `moods${cobranca.seuNumero}`,
    };
  
    const headers = {
      'Content-Type': 'application/json',
      'MerchantId': `${MERCHANT_ID_CIELO}`,
    };
  
    try {
        const response = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(payload),
        });
        const responseText = await response.text(); 
        if (!response.ok) {
          return {
            error: responseText
          };
        }
        const result = JSON.parse(responseText); 
        return result; 
      } catch (error) {
        return {
          error: `Error generating Cielo link: ${error.message}`,
          details: error.stack || error,  
        };
      }
  }
  
  function defaultHeaders() {
    return {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
  }
  