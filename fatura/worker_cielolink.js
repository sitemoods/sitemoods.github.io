addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method !== 'POST') {
      return new Response(
          JSON.stringify({ error: 'Método não permitido. Use POST.' }),
          { status: 405, headers: defaultHeaders() }
      );
  }

  try {
      const data = await request.json(); // Lê o corpo do POST como JSON
      const linkCielo = await gerarLinkCielo(data); // Gera o link

      if (linkCielo.error) {
          console.error('Erro da Cielo:', linkCielo.error);
          return new Response(JSON.stringify(linkCielo), {
              status: 400,
              headers: defaultHeaders(),
          });
      }

      return new Response(JSON.stringify(linkCielo), {
          status: 200,
          headers: defaultHeaders(),
      });
  } catch (error) {
      console.error('Erro interno:', error);
      return new Response(
          JSON.stringify({ error: 'Erro interno', details: error.message }),
          { status: 500, headers: defaultHeaders() }
      );
  }
}

async function gerarLinkCielo(data) {
  const url = 'https://cieloecommerce.cielo.com.br/api/public/v1/orders/';
  const payload = {
      Cart: {
          Items: [
              {
                  Name: `Moods.com.br [${data.monthName}]`,
                  Description: `Fatura ID: ${data.seuNumero}`,
                  UnitPrice: data.valorNominal * 100,
                  Quantity: 1,
                  Type: 'Digital',
              },
          ],
      },
      Payment: {
          MaxNumberOfInstallments: 1,
      },
      Shipping: {
          Type: 'WithoutShipping',
      },
      OrderNumber: data.seuNumero,
      SoftDescriptor: `moods${data.seuNumero}`,
  };

  const headers = {
      'Content-Type': 'application/json',
      'MerchantId': `${MERCHANT_ID_CIELO}`, // Definido como variável de ambiente
  };

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      console.log('Resposta da Cielo:', responseText); // Log da resposta bruta

      if (!response.ok) {
          return { error: responseText };
      }

      return JSON.parse(responseText); // Retorna o link de pagamento
  } catch (error) {
      return {
          error: `Erro ao gerar link da Cielo: ${error.message}`,
          details: error.stack || error,
      };
  }
}

function defaultHeaders() {
  return {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
  };
}
