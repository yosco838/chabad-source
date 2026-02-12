import { SectionWrapper } from "./ui/section-wrapper";
import { ServiceCard } from "./ui/service-card";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-primary-50">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">
          What We Do
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-700">
          We provide the operational backbone your non-profit needs to thrive.
          Here&apos;s how we can help.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
