addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const SENDGRID_API_KEY = globalThis.SENDGRID_API_KEY; // Acesso via globalThis
  const EMAIL_FROM = globalThis.EMAIL_FROM;
  const EMAIL_TO = globalThis.EMAIL_TO;

  if (!SENDGRID_API_KEY || !EMAIL_FROM || !EMAIL_TO) {
    return new Response(
      JSON.stringify({ error: 'Configurações de e-mail ausentes.' }),
      { status: 500, headers: defaultHeaders() }
    );
  }

  if (request.method === 'OPTIONS') {
    return handleOptions();
  }

  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Método não permitido. Use POST.' }),
      { status: 405, headers: defaultHeaders() }
    );
  }

  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/x-www-form-urlencoded')) {
      throw new Error('Formato inválido. Esperado: application/x-www-form-urlencoded.');
    }

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const emailBody = generateEmailBody(data);
    const emailResponse = await sendEmail(emailBody, EMAIL_FROM, EMAIL_TO, SENDGRID_API_KEY);

    if (!emailResponse.ok) {
      throw new Error(`Erro ao enviar e-mail: ${emailResponse.statusText}`);
    }

    return new Response(
      JSON.stringify({ message: 'Notificação recebida e e-mail enviado com sucesso.' }),
      { status: 200, headers: defaultHeaders() }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Erro ao processar a requisição.', details: error.message }),
      { status: 400, headers: defaultHeaders() }
    );
  }
}

function handleOptions() {
  return new Response(null, {
    status: 204,
    headers: defaultHeaders(),
  });
}

function generateEmailBody(data) {
  let body = 'Notificação de Transação Cielo:\n\n';
  for (const [key, value] of Object.entries(data)) {
    body += `${key}: ${value}\n`;
  }
  return body;
}

async function sendEmail(content, from, to, apiKey) {
  const emailData = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: from },
    subject: 'Aviso de Transação CIELO LINK',
    content: [{ type: 'text/plain', value: content }],
  };

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  });

  return response;
}

function defaultHeaders() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
