"use server";

import { Resend } from "resend";
import { ContactSchema } from "@/lib/schemas/contact-schema";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not configured"
    );

    return {
      success: false,
      error: "Email service is not configured",
    };
  }

  const resend = new Resend(apiKey);

  const { name, email, message } =
    validated.data;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(
    /\n/g,
    "<br />"
  );

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      // Your email
      to: "carljasperramos97@gmail.com",

      replyTo: email,

      subject: `New message from ${name}`,

      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${safeName}</p>

        <p><strong>Email:</strong> ${safeEmail}</p>

        <p><strong>Message:</strong></p>

        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error(
        "Failed to send contact email:",
        error
      );

      return {
        success: false,
        error: "Failed to send email",
      };
    }

    return {
      success: true,
    };
  } catch (err) {
    console.error(
      "Failed to send contact email:",
      err
    );

    return {
      success: false,
      error: "Failed to send email",
    };
  }
}
