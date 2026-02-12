import clsx from "clsx";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={clsx("py-20 px-4 md:px-8 lg:px-16", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
