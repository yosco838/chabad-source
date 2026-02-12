"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { SectionWrapper } from "./ui/section-wrapper";
import { serviceOptions } from "@/lib/site-data";
import { Send } from "lucide-react";

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    message: "",
  });

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="text-neutral-700">
            Ready to take your organization to the next level? Tell us about
            your needs and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form action={formAction} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-neutral-900"
              >
                Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-neutral-900"
              >
                Email <span className="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder="you@organization.org"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="organization"
                className="mb-2 block text-sm font-medium text-neutral-900"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder="Your organization name"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-medium text-neutral-900"
              >
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-neutral-900"
            >
              Message <span className="text-error">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-y rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="Tell us about your needs..."
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {isPending ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4" />
              </>
            )}
          </button>

          {state.message && (
            <p
              className={`mt-4 rounded-lg p-4 text-sm font-medium ${
                state.success
                  ? "bg-green-50 text-success"
                  : "bg-red-50 text-error"
              }`}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
}
