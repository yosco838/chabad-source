"use server";

import { Resend } from "resend";
import type { ContactFormState } from "@/lib/types";

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const organization = (formData.get("organization") as string)?.trim();
  const role = (formData.get("role") as string)?.trim();
  const service = (formData.get("service") as string)?.trim();
  const budget = (formData.get("budget") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !organization || !role || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL environment variable");
    return {
      success: false,
      message: "Contact form is not configured yet. Please reach out via email directly.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Chabad Source Contact <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `New inquiry from ${name} at ${organization} — ${service || "General"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
        <p><strong>Budget / Timeframe:</strong> ${budget || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      success: true,
      message: "Thanks for reaching out! We'll review your message and get back to you within 1-2 business days.",
    };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly at info@chabadsource.com.",
    };
  }
}
