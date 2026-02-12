import { siteConfig } from "@/lib/site-data";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-4 md:px-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-100" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-900 md:text-5xl lg:text-6xl">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-700 md:text-xl">
          {siteConfig.description}
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="accent" href="#contact" className="px-8 py-4 text-lg">
            Get in Touch
          </Button>
          <Button variant="secondary" href="#services" className="px-8 py-4 text-lg">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
