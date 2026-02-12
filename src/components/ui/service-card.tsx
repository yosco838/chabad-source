import {
  Palette,
  Database,
  Megaphone,
  Zap,
  BarChart3,
  Settings,
} from "lucide-react";
import type { Service } from "@/lib/types";
import { AnimateOnScroll } from "./animate-on-scroll";

const iconMap: Record<string, React.ReactNode> = {
  palette: <Palette className="h-7 w-7 text-accent-500" />,
  database: <Database className="h-7 w-7 text-accent-500" />,
  megaphone: <Megaphone className="h-7 w-7 text-accent-500" />,
  zap: <Zap className="h-7 w-7 text-accent-500" />,
  "bar-chart": <BarChart3 className="h-7 w-7 text-accent-500" />,
  settings: <Settings className="h-7 w-7 text-accent-500" />,
};

interface ServiceCardProps extends Service {
  index: number;
}

export function ServiceCard({
  title,
  description,
  icon,
  deliverables,
  bestFor,
  index,
}: ServiceCardProps) {
  return (
    <AnimateOnScroll delay={index * 100}>
      <div className="group flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-400">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
          {iconMap[icon]}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-primary-800">
          {title}
        </h3>
        <p className="mb-5 leading-relaxed text-neutral-600">{description}</p>

        <ul className="mb-5 space-y-2">
          {deliverables.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-neutral-600"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-auto border-t border-neutral-100 pt-4 text-sm text-neutral-500">
          <span className="font-medium text-primary-700">Best for: </span>
          {bestFor}
        </p>
      </div>
    </AnimateOnScroll>
  );
}
