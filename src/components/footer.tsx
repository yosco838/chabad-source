import { navLinks, siteConfig } from "@/lib/site-data";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer>
      {/* CTA Band */}
      <div className="bg-primary-800 px-4 py-16 text-center md:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Ready to free up your team to focus on what matters?
          </h2>
          <p className="mb-8 text-primary-200">
            Start with a 30-minute discovery call. We&apos;ll listen to your
            challenges and share how we can help.
          </p>
          <Button
            variant="accent"
            href="#contact"
            className="px-8 py-4 text-lg"
          >
            Book a Consultation
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-primary-900 px-4 py-16 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <div>
              <p className="mb-3 text-xl font-bold">{siteConfig.name}</p>
              <p className="text-sm leading-relaxed text-neutral-300">
                {siteConfig.footerDescription}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
                Navigation
              </p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-300 transition-colors hover:text-accent-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
                Get in Touch
              </p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-accent-400"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-primary-800 pt-8 text-center">
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
