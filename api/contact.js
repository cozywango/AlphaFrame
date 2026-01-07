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

    const { name, email, website, message, inquiryType, phone, socials, productName } = body || {};

    if (!name || !email || (!message && inquiryType !== 'product_inquiry')) {
      // Message is optional for product inquiry as requirements might be short or covered by fields
      if (inquiryType !== 'product_inquiry') {
        console.warn('Validation Failed:', { name, email, hasMessage: !!message });
        return res.status(400).json({ error: 'Missing required fields (name, email, message).' });
      }
    }

    // For product inquiry, requirements are passed as "requirements" but mapped to message or handled separately 
    // In modal we send 'requirements' via formData. Let's map it if incoming message is empty.
    const requirements = body.requirements || message;

    // 5. Transporter Setup
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your SMTP host
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // 6. Send Mail
    let subjectPrefix = '[FOUNDER INQUIRY]';
    if (inquiryType === 'marketer') subjectPrefix = '[HUNTER APPLICATION]';
    if (inquiryType === 'product_inquiry') subjectPrefix = `[PRODUCT INQUIRY] ${productName || 'General'}`;

    const mailOptions = {
      from: `"${name}" <${EMAIL_USER}>`, // Sender address
      to: EMAIL_USER, // List of receivers (sending to yourself)
      replyTo: email,
      subject: `${subjectPrefix} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Socials: ${socials || 'Not provided'}
        Website: ${website || 'Not provided'}
        Type: ${inquiryType === 'marketer' ? 'Hunter Application' : inquiryType === 'product_inquiry' ? 'Product Inquiry' : 'Founder Inquiry'}
        Product: ${productName || 'N/A'}
        
        Message / Requirements:
        ${requirements || message}
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