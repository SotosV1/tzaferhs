import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Το κατάστημα — ΤΖΑΦΕΡΗΣ" },
      { name: "description", content: "Η ιστορία και η φιλοσοφία του καταστήματος ΤΖΑΦΕΡΗΣ φρούτα και λαχανικά στην Έδεσσα." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Η ιστορία μας</span>
      <h1 className="mt-2 font-display text-5xl font-bold">Παράδοση & μεράκι στην Έδεσσα</h1>

      <div className="prose prose-stone mt-8 max-w-none text-foreground/80">
        <p className="text-lg leading-relaxed">
          Στο κατάστημα <strong>ΤΖΑΦΕΡΗΣ</strong>, τα φρέσκα φρούτα και λαχανικά είναι το πάθος μας
          εδώ και δεκαετίες. Κάθε πρωί διαλέγουμε ένα-ένα τα προϊόντα μας, με συνεργασίες με
          τοπικούς παραγωγούς της Πέλλας και της ευρύτερης Μακεδονίας.
        </p>
        <p className="leading-relaxed">
          Πιστεύουμε στην ποιότητα, στη φρεσκάδα και στη γνωριμία με τον πελάτη — όπως παλιά. Ένα
          μανάβικο γειτονιάς, με τη ζεστασιά της παράδοσης.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Leaf, title: "Φρεσκάδα", text: "Καθημερινή προμήθεια από τους παραγωγούς." },
          { icon: Heart, title: "Μεράκι", text: "Δουλεύουμε με αγάπη για κάθε πελάτη." },
          { icon: Users, title: "Γειτονιά", text: "Δίπλα σας, στην καρδιά της Έδεσσας." },
        ].map((v, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
              <v.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{v.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
