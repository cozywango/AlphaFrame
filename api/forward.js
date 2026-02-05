import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Target email address for forwarding
const FORWARD_TO = 'joelwango@outlook.com';
const FROM_ADDRESS = 'forwarder@alphasight.online';

/**
 * Extracts a clean sender string from the 'from' field
 * Handles formats like: "Name <email@example.com>" or just "email@example.com"
 */
function extractSender(from) {
    const match = from.match(/^(.+?)\s*<(.+?)>$/);
    if (match) {
        return { email: match[2].trim(), display: match[1].trim() };
    }
    return { email: from.trim(), display: from.trim() };
}

/**
 * Ensures subject is never empty to avoid spam filters
 */
function sanitizeSubject(subject, senderEmail) {
    if (!subject || subject.trim() === '') {
        return `[Forwarded] Message from ${senderEmail}`;
    }
    return `[Forwarded] ${subject}`;
}

/**
 * Ensures body is never empty to avoid spam filters
 */
function sanitizeBody(text, html) {
    const fallbackText = '(No message body)';
    const fallbackHtml = '<p><em>(No message body)</em></p>';

    const sanitizedText = text && text.trim() !== '' ? text : fallbackText;
    const sanitizedHtml = html && html.trim() !== '' ? html : (text && text.trim() !== '' ? `<pre>${text}</pre>` : fallbackHtml);

    return { text: sanitizedText, html: sanitizedHtml };
}

/**
 * Wraps the forwarded email content in a styled container with sender info
 */
function wrapHtmlContent(html, senderEmail, senderDisplay) {
    return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0 0 8px 0; font-size: 18px;">📧 Forwarded Email</h2>
        <p style="margin: 0; opacity: 0.9; font-size: 14px;">
          <strong>From:</strong> ${senderDisplay} &lt;${senderEmail}&gt;
        </p>
      </div>
      <div style="background: #ffffff; border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
        ${html}
      </div>
      <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
        This email was automatically forwarded by Alphasight
      </p>
    </div>
  `;
}

/**
 * Main handler for inbound email forwarding
 */
async function handler(req, res) {
    console.log(`[Forward API] Called with method: ${req.method}`);

    // Only accept POST requests (Resend webhooks use POST)
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    // Verify API key is configured
    if (!process.env.RESEND_API_KEY) {
        console.error('[Forward API] Missing RESEND_API_KEY environment variable');
        return res.status(500).json({ error: 'Server misconfiguration: missing API key' });
    }

    try {
        // Parse the incoming payload
        const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

        console.log('[Forward API] Received webhook type:', payload.type);

        // Extract email data from payload.data
        const emailData = payload.data;

        if (!emailData || !emailData.from) {
            console.error('[Forward API] Invalid payload: missing data or from field');
            return res.status(400).json({ error: 'Invalid payload: missing required email data' });
        }

        // Extract sender information
        const { email: senderEmail, display: senderDisplay } = extractSender(emailData.from);

        // Sanitize subject (never empty)
        const subject = sanitizeSubject(emailData.subject, senderEmail);

        // Sanitize body (never empty)
        const { text, html } = sanitizeBody(emailData.text, emailData.html);

        // Wrap HTML content with forwarding header
        const wrappedHtml = wrapHtmlContent(html, senderEmail, senderDisplay);

        // Prepare attachments if any exist
        const attachments = emailData.attachments?.map((att) => ({
            filename: att.filename,
            content: att.content,
            content_type: att.content_type,
        }));

        console.log('[Forward API] Forwarding email:', {
            from: FROM_ADDRESS,
            to: FORWARD_TO,
            replyTo: senderEmail,
            subject,
            hasAttachments: attachments && attachments.length > 0,
            attachmentCount: attachments?.length || 0,
        });

        // Send the forwarded email via Resend
        const result = await resend.emails.send({
            from: FROM_ADDRESS,
            to: FORWARD_TO,
            replyTo: senderEmail,
            subject,
            text: `Forwarded from: ${senderDisplay} <${senderEmail}>\n\n${text}`,
            html: wrappedHtml,
            ...(attachments && attachments.length > 0 && { attachments }),
        });

        console.log('[Forward API] Email forwarded successfully:', result);

        return res.status(200).json({
            success: true,
            message: 'Email forwarded successfully',
            id: result.data?.id
        });

    } catch (error) {
        console.error('[Forward API] Error forwarding email:', error.message);
        return res.status(500).json({
            error: 'Failed to forward email',
            details: error.message
        });
    }
}

export default handler;
