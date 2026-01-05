import nodemailer from 'nodemailer';

// Helper to handle CORS (vital for Vite + Vercel interaction)
const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with your specific domain in production
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

async function handler(req, res) {
  // 1. Debugging: Log entrance (Verify function is reachable)
  console.log(`[API] /contact called with method: ${req.method}`);

  // 2. Method Check
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  // 3. Environment Check
  const { EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error('Missing Environment Variables: EMAIL_USER or EMAIL_PASS');
    return res.status(500).json({ error: 'Server misconfiguration.' });
  }

  try {
    // 4. Input Parsing & Validation
    // Vercel usually parses JSON automatically if Content-Type is application/json.
    // We add a fallback just in case.
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    
    const { name, email, website, message } = body || {};

    if (!name || !email || !message) {
      console.warn('Validation Failed:', { name, email, hasMessage: !!message });
      return res.status(400).json({ error: 'Missing required fields (name, email, message).' });
    }

    // 5. Transporter Setup
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your SMTP host
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // 6. Send Mail
    const mailOptions = {
      from: `"${name}" <${EMAIL_USER}>`, // Sender address
      to: EMAIL_USER, // List of receivers (sending to yourself)
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Website: ${website || 'Not provided'}
        
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return res.status(200).json({ success: true, message: 'Email sent!' });

  } catch (error) {
    console.error('Handler Error:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}

// Export the handler wrapped in CORS logic
export default allowCors(handler);