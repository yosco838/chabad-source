import { SectionWrapper } from "./ui/section-wrapper";
import { AnimateOnScroll } from "./ui/animate-on-scroll";
import { caseStudies } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export function CaseStudies() {
  return (
    <SectionWrapper id="case-studies">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">
          Case Studies
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-600">
          Real results from organizations we&apos;ve helped streamline their
          operations and amplify their impact.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {caseStudies.map((study, i) => (
          <AnimateOnScroll key={study.id} delay={i * 150}>
            <div className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white overflow-hidden">
              <div className="bg-primary-500 px-6 py-3">
                <p className="text-sm font-medium text-primary-100">
                  {study.clientType}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Challenge
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {study.problem}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Solution
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {study.solution}
                  </p>
                </div>
                <div className="mt-auto border-t border-neutral-100 pt-4">
                  <div className="flex items-center gap-2 text-accent-500">
                    <ArrowRight className="h-4 w-4" />
                    <span className="text-sm font-semibold">
                      {study.outcome}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">
                    {study.metric}
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
