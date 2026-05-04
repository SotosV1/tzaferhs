import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Truck, Leaf, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ΤΖΑΦΕΡΗΣ — Φρούτα & Λαχανικά | Έδεσσα" },
      { name: "description", content: "Φρέσκα φρούτα και λαχανικά κάθε μέρα. Online παραγγελίες με delivery στην Έδεσσα." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.slice(0, 8);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Φρέσκα φρούτα και λαχανικά"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-foreground/80" />
        </div>
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col items-start justify-end px-4 pb-16 pt-32 text-background">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-background backdrop-blur-md">
            <MapPin className="h-3 w-3" /> Έδεσσα · από το 1985
          </span>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] text-background drop-shadow-lg sm:text-6xl md:text-7xl">
            Από τη γη <span className="text-accent">στο τραπέζι</span> σας.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-background/90">
            Φρέσκα φρούτα και λαχανικά, διαλεγμένα ένα-ένα κάθε πρωί. Παραγγείλτε online και θα τα φέρουμε στην πόρτα σας.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition-transform hover:scale-105"
            >
              Δες τα προϊόντα
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-background/40 bg-background/10 px-7 py-3.5 font-semibold text-background backdrop-blur-md transition-colors hover:bg-background/20"
            >
              Επικοινωνία
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Leaf, title: "Φρέσκα κάθε μέρα", text: "Καθημερινή προμήθεια από επιλεγμένους παραγωγούς της περιοχής." },
            { icon: Truck, title: "Delivery στην Έδεσσα", text: "Παράδοση στο σπίτι σας με μία απλή online παραγγελία." },
            { icon: Sparkles, title: "Επιλογή με μεράκι", text: "Διαλέγουμε ένα-ένα τα προϊόντα που φτάνουν στο τραπέζι σας." },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Της εποχής</span>
            <h2 className="mt-2 font-display text-4xl font-bold">Δημοφιλή προϊόντα</h2>
          </div>
          <Link to="/products" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
            Δες όλα →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl bg-[var(--gradient-warm)] p-10 text-primary-foreground shadow-[var(--shadow-warm)] md:p-16">
          <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
            Ετοιμάστε το καλάθι σας — εμείς το φέρνουμε.
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/90">
            Διαλέξτε από φρούτα, λαχανικά και μυρωδικά εποχής. Παράδοση αυθημερόν στην Έδεσσα.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 font-semibold text-foreground transition-transform hover:scale-105"
          >
            Παραγγελία τώρα
          </Link>
        </div>
      </section>
    </>
  );
}
