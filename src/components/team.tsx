import { SectionWrapper } from "./ui/section-wrapper";
import { AnimateOnScroll } from "./ui/animate-on-scroll";
import { teamMembers } from "@/lib/site-data";
import { User } from "lucide-react";

export function Team() {
  return (
    <SectionWrapper id="team" className="bg-primary-50">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">
          Meet the Team
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-600">
          We&apos;re a boutique team of experienced consultants who combine
          technical expertise with a deep understanding of non-profit operations.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {teamMembers.map((member, i) => (
          <AnimateOnScroll key={member.name} delay={i * 150}>
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
                <User className="h-10 w-10 text-neutral-400" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-primary-800">
                {member.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-accent-500">
                {member.role}
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                {member.bio}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
