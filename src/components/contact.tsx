"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { SectionWrapper } from "./ui/section-wrapper";
import { serviceOptions, budgetOptions } from "@/lib/site-data";
import { Send } from "lucide-react";

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    message: "",
  });

  return (
    <SectionWrapper id="contact" className="bg-primary-50">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">
            Get in Touch
          </h2>
          <p className="text-neutral-600">
            Let&apos;s discuss how we can help streamline your operations. Start
            with a 30-minute discovery call — we&apos;ll listen to your
            challenges and share how we can help.
          </p>
        </div>

        <form action={formAction} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                Email <span className="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder="you@organization.org"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="organization"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                Organization <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder="Your organization name"
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                Role <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="role"
                name="role"
                required
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder="Your role"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="budget"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                Budget / Timeframe
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                <option value="">Select range...</option>
                {budgetOptions.map((option) => (
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
              className="mb-2 block text-sm font-medium text-neutral-800"
            >
              What do you need help with? <span className="text-error">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-y rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="Tell us about your challenges and goals..."
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-500 px-8 py-4 text-base font-medium text-white transition-colors duration-200 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
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

        <p className="mt-8 text-center text-sm text-neutral-500">
          Prefer email? Contact us at{" "}
          <a
            href="mailto:info@chabadsource.com"
            className="font-medium text-primary-500 hover:text-primary-600"
          >
            info@chabadsource.com
          </a>
        </p>
      </div>
    </SectionWrapper>
  );
}
