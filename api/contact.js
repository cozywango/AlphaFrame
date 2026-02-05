import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Missing Environment Variable: RESEND_API_KEY');
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

    // 5. Determine subject prefix based on inquiry type
    let subjectPrefix = '[FOUNDER INQUIRY]';
    if (inquiryType === 'marketer') subjectPrefix = '[HUNTER APPLICATION]';
    if (inquiryType === 'product_inquiry') subjectPrefix = `[PRODUCT INQUIRY] ${productName || 'General'}`;

    // 6. Send email using Resend
    const data = await resend.emails.send({
      from: 'forwarder@alphasight.online', // Your verified sender address
      to: 'joelwango@outlook.com', // Where to receive contact form submissions
      replyTo: email, // Reply to the person who submitted the form
      subject: `${subjectPrefix} from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #f4f4f4;">
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h2 style="margin-top:0;">${subjectPrefix}</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Socials:</strong> ${socials || 'Not provided'}</p>
            <p><strong>Website:</strong> ${website || 'Not provided'}</p>
            <p><strong>Type:</strong> ${inquiryType === 'marketer' ? 'Hunter Application' : inquiryType === 'product_inquiry' ? 'Product Inquiry' : 'Founder Inquiry'}</p>
            <p><strong>Product:</strong> ${productName || 'N/A'}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <h3>Message / Requirements:</h3>
            <div style="color: #333; white-space: pre-wrap;">
              ${requirements || message || 'No message provided'}
            </div>
          </div>
        </div>
      `,
    });

    console.log('Email sent successfully via Resend:', data);

    return res.status(200).json({ success: true, message: 'Email sent!' });

  } catch (error) {
    console.error('Handler Error:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}

// Export the handler wrapped in CORS logic
export default allowCors(handler);