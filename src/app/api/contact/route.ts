import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Simple validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, phone, message)' },
        { status: 400 }
      );
    }

    // In production, integrate EmailJS, SendGrid, or custom SMTP transporter:
    // await sendMail({ name, email, phone, company, message });
    console.log('Inquiry form submission received:', { name, email, phone, company, message });

    return NextResponse.json(
      { success: true, message: 'Inquiry received successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error occurred' },
      { status: 500 }
    );
  }
}
