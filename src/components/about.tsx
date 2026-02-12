import { SectionWrapper } from "./ui/section-wrapper";
import { AnimateOnScroll } from "./ui/animate-on-scroll";
import { aboutText } from "@/lib/site-data";
import { Heart, Users, Zap } from "lucide-react";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <AnimateOnScroll>
          <div>
            <h2 className="mb-6 text-3xl font-bold text-primary-900 md:text-4xl">
              {aboutText.heading}
            </h2>
            {aboutText.paragraphs.map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed text-neutral-700 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
            <div className="flex items-start gap-4 rounded-lg bg-primary-50 p-6">
              <Heart className="h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <p className="font-semibold text-primary-800">Mission-Driven</p>
                <p className="text-sm text-neutral-600">We understand non-profit needs</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg bg-primary-50 p-6">
              <Users className="h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <p className="font-semibold text-primary-800">Dedicated Team</p>
                <p className="text-sm text-neutral-600">Professionals who care</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg bg-primary-50 p-6">
              <Zap className="h-6 w-6 shrink-0 text-accent-500" />
              <div>
                <p className="font-semibold text-primary-800">Fast Turnaround</p>
                <p className="text-sm text-neutral-600">Results without the wait</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
