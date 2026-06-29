"use server";

import { Resend } from "resend";

const CONTACT_RECIPIENT = "hello@adamjamesrobinson.co.uk";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and message." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return {
      status: "error",
      message: "Sorry, the contact form isn't configured yet. Please email us directly.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "AJR Digital Solutions <onboarding@resend.dev>",
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service || "Not specified"}\n\n${message}`,
    });
    return { status: "success", message: "Thanks! We'll be in touch within one business day." };
  } catch (error) {
    console.error("Failed to send contact email", error);
    return { status: "error", message: "Something went wrong sending your message. Please try again." };
  }
}
