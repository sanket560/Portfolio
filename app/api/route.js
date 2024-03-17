import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASSWORD,
  },
});

export async function POST(req) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const mail = await transporter.sendMail({
      from: email,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `Message from ${name}`,
      text: message,
    });

    return NextResponse.json({ message: "Message Sent Successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error sending email" });
  }
}
