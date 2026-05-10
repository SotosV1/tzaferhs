import type { Product } from "@/lib/products";
import {
  AppleIcon, ApricotIcon, AvocadoIcon, BananaIcon, BellPepperIcon, CarrotIcon, CherryIcon,
  CucumberIcon, DillIcon, FigIcon, GrapesIcon, GreenAppleIcon, KiwiIcon, LemonIcon,
  MandarinIcon, MelonIcon, OnionIcon, OrangeIcon, ParsleyIcon, PeachIcon, PearIcon,
  PepperIcon, PineappleIcon, PlumIcon, PomegranateIcon, PotatoIcon, SpinachIcon,
  StrawberryIcon, TomatoIcon, WatermelonIcon,
} from "./FruitIcons";

const iconMap = {
  apple: AppleIcon, apricot: ApricotIcon, avocado: AvocadoIcon, banana: BananaIcon,
  bellPepper: BellPepperIcon, carrot: CarrotIcon, cherry: CherryIcon, cucumber: CucumberIcon,
  dill: DillIcon, fig: FigIcon, grapes: GrapesIcon, greenApple: GreenAppleIcon,
  kiwi: KiwiIcon, lemon: LemonIcon, mandarin: MandarinIcon, melon: MelonIcon,
  onion: OnionIcon, orange: OrangeIcon, parsley: ParsleyIcon, peach: PeachIcon,
  pear: PearIcon, pepper: PepperIcon, pineapple: PineappleIcon, plum: PlumIcon,
  pomegranate: PomegranateIcon, potato: PotatoIcon, spinach: SpinachIcon,
  strawberry: StrawberryIcon, tomato: TomatoIcon, watermelon: WatermelonIcon,
};

export function ProductCard({ product }: { product: Product }) {
  const SvgIcon = product.icon ? iconMap[product.icon] : null;
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]">
      <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-muted to-accent/20 text-7xl">
        {SvgIcon ? (
          <SvgIcon className="h-28 w-28 transition-transform duration-300 group-hover:scale-110" />
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
