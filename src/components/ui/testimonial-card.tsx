import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";
import { AnimateOnScroll } from "./animate-on-scroll";

interface TestimonialCardProps extends Testimonial {
  index: number;
}

export function TestimonialCard({ quote, name, organization, index }: TestimonialCardProps) {
  return (
    <AnimateOnScroll delay={index * 150}>
      <div className="rounded-xl bg-white p-8 shadow-sm border border-neutral-300">
        <Quote className="mb-4 h-6 w-6 text-accent-400" />
        <p className="mb-6 leading-relaxed text-neutral-700 italic">
          &ldquo;{quote}&rdquo;
        </p>
        <div>
          <p className="font-semibold text-primary-800">{name}</p>
          <p className="text-sm text-neutral-500">{organization}</p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
