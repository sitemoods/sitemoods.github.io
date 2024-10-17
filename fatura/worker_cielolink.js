addEventListener('fetch', event => {
    event.respondWith(handleRequest(event));
  });
  

  async function gerarLinkCielo(event) {


    const url = 'https://cieloecommerce.cielo.com.br/api/public/v1/orders/';
    const payload = {
      Cart: {
        Items: [
          {
            Name: `Moods.com.br [${event.monthName}]`,
            Description: `Fatura ID: ${event.seuNumero}`,
            UnitPrice: event.valorNominal * 100,
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
      OrderNumber: event.seuNumero,
      SoftDescriptor: `moods${event.seuNumero}`,
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
  