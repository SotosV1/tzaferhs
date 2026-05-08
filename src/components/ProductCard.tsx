import type { Product } from "@/lib/products";
import { BellPepperIcon, FigIcon, GrapesIcon, PlumIcon, PomegranateIcon } from "./FruitIcons";

const iconMap = { plum: PlumIcon, fig: FigIcon, pomegranate: PomegranateIcon, bellPepper: BellPepperIcon, grapes: GrapesIcon };

export function ProductCard({ product }: { product: Product }) {
  const SvgIcon = product.icon ? iconMap[product.icon] : null;
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]">
      <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-muted to-accent/20 text-7xl">
        {SvgIcon ? (
          <SvgIcon className="h-24 w-24 transition-transform duration-300 group-hover:scale-110" />
        ) : (
          <span className="transition-transform duration-300 group-hover:scale-110">{product.emoji}</span>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-secondary/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold text-foreground">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{product.description}</p>
      </div>
    </div>
  );
}
