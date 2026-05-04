import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Minus, Plus, Trash2, ShoppingBasket, CheckCircle2 } from "lucide-react";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Καλάθι & Παραγγελία — ΤΖΑΦΕΡΗΣ" },
      { name: "description", content: "Ολοκληρώστε την παραγγελία σας. Παράδοση στην Έδεσσα." },
    ],
  }),
  component: CartPage,
});

const orderSchema = z.object({
  name: z.string().trim().min(2, "Συμπληρώστε το όνομά σας").max(80),
  phone: z.string().trim().min(8, "Έγκυρο τηλέφωνο").max(20).regex(/^[0-9 +\-]+$/, "Μόνο αριθμοί"),
  address: z.string().trim().min(5, "Συμπληρώστε διεύθυνση").max(200),
  notes: z.string().trim().max(500).optional(),
});

const DELIVERY_FEE = 2.0;
const FREE_DELIVERY_OVER = 20;

function CartPage() {
  const { detailed, total, setQty, remove, clear, count } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const fee = total >= FREE_DELIVERY_OVER || total === 0 ? 0 : DELIVERY_FEE;
  const grand = total + fee;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = orderSchema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    clear();
  };

  if (submitted) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-secondary" />
        <h1 className="mt-6 font-display text-4xl font-bold">Ευχαριστούμε!</h1>
        <p className="mt-3 text-muted-foreground">
          Η παραγγελία σας καταχωρήθηκε. Θα σας καλέσουμε σύντομα στο τηλέφωνο που μας δώσατε για επιβεβαίωση.
        </p>
        <Link to="/products" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-warm)]">
          Νέα παραγγελία
        </Link>
      </section>
    );
  }

  if (count === 0) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <ShoppingBasket className="mx-auto h-16 w-16 text-muted-foreground" />
        <h1 className="mt-6 font-display text-4xl font-bold">Το καλάθι σας είναι άδειο</h1>
        <p className="mt-3 text-muted-foreground">Επιλέξτε φρέσκα προϊόντα από τον κατάλογό μας.</p>
        <Link to="/products" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-warm)]">
          Στα προϊόντα
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-5xl font-bold">Το καλάθι σας</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-3">
          {detailed.map((it) => (
            <div key={it.id} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted text-3xl">{it.product.emoji}</div>
              <div className="flex-1">
                <div className="font-display text-lg font-bold">{it.product.name}</div>
                <div className="text-sm text-muted-foreground">{it.product.price.toFixed(2)}€ / {it.product.unit}</div>
              </div>
              <div className="flex items-center gap-1 rounded-full border border-border bg-background p-1">
                <button onClick={() => setQty(it.id, it.qty - 1)} className="rounded-full p-1.5 hover:bg-muted" aria-label="Μείον">
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-bold">{it.qty}</span>
                <button onClick={() => setQty(it.id, it.qty + 1)} className="rounded-full p-1.5 hover:bg-muted" aria-label="Συν">
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="w-20 text-right font-display text-lg font-bold text-primary">{it.subtotal.toFixed(2)}€</div>
              <button onClick={() => remove(it.id)} className="rounded-full p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive" aria-label="Αφαίρεση">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <aside className="h-fit space-y-6 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
          <div>
            <h2 className="font-display text-2xl font-bold">Στοιχεία παράδοσης</h2>
            <p className="mt-1 text-xs text-muted-foreground">Παράδοση εντός Έδεσσας.</p>
          </div>
          <form onSubmit={submit} className="space-y-3" noValidate>
            {[
              { name: "name", label: "Ονοματεπώνυμο", type: "text", placeholder: "Γιώργος Παπαδόπουλος" },
              { name: "phone", label: "Τηλέφωνο", type: "tel", placeholder: "69xxxxxxxx" },
              { name: "address", label: "Διεύθυνση", type: "text", placeholder: "Οδός, αριθμός" },
            ].map((f) => (
              <div key={f.name}>
                <label className="mb-1 block text-xs font-semibold text-foreground/70">{f.label}</label>
                <input
                  type={f.type}
                  value={(form as never)[f.name]}
                  onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                  placeholder={f.placeholder}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  maxLength={f.name === "phone" ? 20 : 200}
                />
                {errors[f.name] && <p className="mt-1 text-xs text-destructive">{errors[f.name]}</p>}
              </div>
            ))}
            <div>
              <label className="mb-1 block text-xs font-semibold text-foreground/70">Σημειώσεις (προαιρετικό)</label>
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={2}
                maxLength={500}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                placeholder="π.χ. όροφος, κουδούνι..."
              />
            </div>

            <div className="space-y-1.5 border-t border-border pt-4 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Υποσύνολο</span><span className="font-semibold">{total.toFixed(2)}€</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Παράδοση</span><span className="font-semibold">{fee === 0 ? "Δωρεάν" : `${fee.toFixed(2)}€`}</span></div>
              {fee > 0 && <p className="text-[11px] text-muted-foreground">Δωρεάν παράδοση για παραγγελίες άνω των {FREE_DELIVERY_OVER}€.</p>}
              <div className="flex justify-between border-t border-border pt-3 font-display text-xl font-bold"><span>Σύνολο</span><span className="text-primary">{grand.toFixed(2)}€</span></div>
            </div>

            <button type="submit" className="mt-2 w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition-transform hover:scale-[1.02]">
              Ολοκλήρωση παραγγελίας
            </button>
            <p className="text-center text-[11px] text-muted-foreground">Πληρωμή με μετρητά κατά την παράδοση.</p>
          </form>
        </aside>
      </div>
    </section>
  );
}
