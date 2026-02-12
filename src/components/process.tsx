import { SectionWrapper } from "./ui/section-wrapper";
import { ProcessStepCard } from "./ui/process-step";
import { processSteps } from "@/lib/site-data";

export function Process() {
  return (
    <SectionWrapper id="process">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-700">
          Getting started is simple. Here&apos;s our process from first call to
          ongoing partnership.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <ProcessStepCard
            key={step.title}
            stepNumber={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
