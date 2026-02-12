import { navLinks, siteConfig } from "@/lib/site-data";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-900 px-4 py-16 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="mb-3 text-xl font-bold">{siteConfig.name}</p>
            <p className="text-sm leading-relaxed text-neutral-300">
              {siteConfig.description}
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
    </footer>
  );
}
