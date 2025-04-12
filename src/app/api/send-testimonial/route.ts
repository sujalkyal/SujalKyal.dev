import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, position, company = "", message } = await req.json();

  if (!name || !position || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Testimonial Form <onboarding@resend.dev>",
      to: "sujalkyal2704@gmail.com",
      subject: "New Testimonial Submission",
      html: `
        <h2>New Testimonial</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Position:</strong> ${position}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
