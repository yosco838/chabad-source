import { SectionWrapper } from "./ui/section-wrapper";
import { TestimonialCard } from "./ui/testimonial-card";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-600">
          Organizations we&apos;ve partnered with share their experience working
          with Chabad Source.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
