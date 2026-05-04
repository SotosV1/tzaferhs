import { Plus, Check } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]">
      <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-muted to-accent/20 text-7xl">
        <span className="transition-transform duration-300 group-hover:scale-110">{product.emoji}</span>
        <span className="absolute left-3 top-3 rounded-full bg-secondary/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold text-foreground">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{product.description}</p>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <div className="font-display text-xl font-bold text-primary">{product.price.toFixed(2)}€</div>
            <div className="text-[11px] text-muted-foreground">/ {product.unit}</div>
          </div>
          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition-all hover:scale-105 active:scale-95"
            aria-label={`Προσθήκη ${product.name} στο καλάθι`}
          >
            {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {added ? "Προστέθηκε" : "Προσθήκη"}
          </button>
        </div>
      </div>
    </div>
  );
}
