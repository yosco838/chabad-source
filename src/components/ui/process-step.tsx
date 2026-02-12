import { AnimateOnScroll } from "./animate-on-scroll";

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

export function ProcessStepCard({ stepNumber, title, description }: ProcessStepProps) {
  return (
    <AnimateOnScroll delay={stepNumber * 150}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-lg font-bold text-white">
          {stepNumber}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-primary-800">{title}</h3>
        <p className="max-w-xs leading-relaxed text-neutral-700">{description}</p>
      </div>
    </AnimateOnScroll>
  );
}
