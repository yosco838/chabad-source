import { SectionWrapper } from "./ui/section-wrapper";
import { AnimateOnScroll } from "./ui/animate-on-scroll";
import { Heart, Wrench, FileText } from "lucide-react";

const principles = [
  {
    icon: <Heart className="h-6 w-6 text-accent-500" />,
    title: "Mission-first, tech-second",
    description:
      "We start every engagement by understanding your organization's goals, challenges, and constraints. Technology decisions follow from that understanding, not from a checklist of features. If a simpler solution exists, we'll recommend it. We design to support your mission, not complicate it.",
  },
  {
    icon: <Wrench className="h-6 w-6 text-accent-500" />,
    title: "Design for maintainability",
    description:
      "We build systems with low overhead. That means clear processes, well-documented automation, and solutions your team can understand and maintain. We avoid over-engineering and focus on solutions that scale with your organization without requiring constant intervention.",
  },
  {
    icon: <FileText className="h-6 w-6 text-accent-500" />,
    title: "Transparent, documented systems",
    description:
      "Every solution we build comes with clear documentation. You'll know how your systems work, why decisions were made, and how to make changes in the future. No black boxes, no mystery processes. We believe in transparency because it builds trust and empowers your team.",
  },
];

export function Approach() {
  return (
    <SectionWrapper id="approach" className="bg-primary-50">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">
          Why Chabad Source
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-600">
          We&apos;re not just implementers. We&apos;re partners who design
          systems that support your mission.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {principles.map((principle, i) => (
          <AnimateOnScroll key={principle.title} delay={i * 150}>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                {principle.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-primary-800">
                {principle.title}
              </h3>
              <p className="leading-relaxed text-neutral-600">
                {principle.description}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
