import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Προϊόντα — ΤΖΑΦΕΡΗΣ Φρούτα & Λαχανικά" },
      { name: "description", content: "Φρέσκα φρούτα, λαχανικά και μυρωδικά εποχής στην Έδεσσα." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Όλα");
  const list = cat === "Όλα" ? products : products.filter((p) => p.category === cat);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Κατάλογος</span>
        <h1 className="mt-2 font-display text-5xl font-bold">Τα προϊόντα μας</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Φρέσκα κάθε μέρα. Οι τιμές μπορεί να διαφέρουν ανάλογα με την εποχή.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
              cat === c
                ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-warm)]"
                : "border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
