"use server";

import { Resend } from "resend";
import { ContactSchema } from "@/lib/schemas/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(
  formData: unknown
) {
  const validated =
    ContactSchema.safeParse(formData);

  if (!validated.success) {
    return {
      success: false,
      error: "Invalid form data",
    };
  }

  const { name, email, message } =
    validated.data;

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      // Your email
      to: "carljasperramos97@gmail.com",

      subject: `New message from ${name}`,

      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      error: "Failed to send email",
    };
  }
}