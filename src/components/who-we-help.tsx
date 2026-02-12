import { SectionWrapper } from "./ui/section-wrapper";
import { AnimateOnScroll } from "./ui/animate-on-scroll";
import { whoWeHelp } from "@/lib/site-data";
import { Heart, Users, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart className="h-8 w-8 text-accent-500" />,
  users: <Users className="h-8 w-8 text-accent-500" />,
  "trending-up": <TrendingUp className="h-8 w-8 text-accent-500" />,
};

export function WhoWeHelp() {
  return (
    <SectionWrapper id="who-we-help" className="bg-primary-50">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">
          Who We Help
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-600">
          We work with mission-driven organizations that need systems that scale
          with their impact.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {whoWeHelp.map((item, i) => (
          <AnimateOnScroll key={item.title} delay={i * 150}>
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                {iconMap[item.icon]}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-primary-800">
                {item.title}
              </h3>
              <p className="leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
