import { Palette, Database, Megaphone } from "lucide-react";
import type { Service } from "@/lib/types";
import { AnimateOnScroll } from "./animate-on-scroll";

const iconMap: Record<string, React.ReactNode> = {
  palette: <Palette className="h-8 w-8 text-accent-500" />,
  database: <Database className="h-8 w-8 text-accent-500" />,
  megaphone: <Megaphone className="h-8 w-8 text-accent-500" />,
};

interface ServiceCardProps extends Service {
  index: number;
}

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  return (
    <AnimateOnScroll delay={index * 150}>
      <div className="group rounded-xl border border-neutral-300 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-400">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-50">
          {iconMap[icon]}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-primary-800">{title}</h3>
        <p className="leading-relaxed text-neutral-700">{description}</p>
      </div>
    </AnimateOnScroll>
  );
}
