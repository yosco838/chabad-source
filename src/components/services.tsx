import { SectionWrapper } from "./ui/section-wrapper";
import { ServiceCard } from "./ui/service-card";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <SectionWrapper id="services">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">
          Core Services
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-600">
          From design and branding to CRM architecture and process automation, we
          handle the systems so you can focus on impact.
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
