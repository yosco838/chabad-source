import { SectionWrapper } from "./ui/section-wrapper";
import { AnimateOnScroll } from "./ui/animate-on-scroll";
import { aboutText, values } from "@/lib/site-data";
import { Eye, ShieldCheck, Leaf, Target } from "lucide-react";

const valueIcons: Record<string, React.ReactNode> = {
  Clarity: <Eye className="h-5 w-5 text-accent-500" />,
  Reliability: <ShieldCheck className="h-5 w-5 text-accent-500" />,
  Stewardship: <Leaf className="h-5 w-5 text-accent-500" />,
  Impact: <Target className="h-5 w-5 text-accent-500" />,
};

export function About() {
  return (
    <SectionWrapper id="about">
      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-primary-900 md:text-4xl">
            {aboutText.heading}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-neutral-600">
            {aboutText.intro}
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <div className="mx-auto mb-12 max-w-3xl space-y-4">
          {aboutText.background.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-neutral-600">
              {paragraph}
            </p>
          ))}
          <p className="leading-relaxed text-neutral-600">
            {aboutText.workingTogether}
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, i) => (
          <AnimateOnScroll key={value.title} delay={i * 100}>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
                {valueIcons[value.title]}
              </div>
              <h3 className="mb-2 font-semibold text-primary-800">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {value.description}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
