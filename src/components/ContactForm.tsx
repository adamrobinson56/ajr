"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

const services = [
  "Web Development",
  "Mobile Apps",
  "Hosting",
  "Design",
  "SEO",
  "Digital Growth",
  "Not sure yet",
];

const fieldClass =
  "rounded-none border-0 border-b border-gold-line bg-transparent px-0 py-3 text-cream placeholder:text-cream/30 outline-none transition focus:border-gold";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-cream/50">
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} placeholder="Jane Smith" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs uppercase tracking-[0.18em] text-cream/50">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-xs uppercase tracking-[0.18em] text-cream/50">
          Service you&apos;re interested in
        </label>
        <select id="service" name="service" className={`${fieldClass} appearance-none`} defaultValue="">
          <option className="bg-charcoal" value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option className="bg-charcoal" key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-cream/50">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={fieldClass}
          placeholder="Tell us a little about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center border border-gold px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-soft transition hover:bg-gold hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {pending ? "Sending..." : "Send message"}
      </button>

      {state.status === "success" && (
        <p className="text-sm font-medium text-emerald-400">{state.message}</p>
      )}
      {state.status === "error" && (
        <p className="text-sm font-medium text-red-400">{state.message}</p>
      )}
    </form>
  );
}
