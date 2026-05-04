import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Επικοινωνία — ΤΖΑΦΕΡΗΣ" },
      { name: "description", content: "Διεύθυνση, τηλέφωνο και ωράριο λειτουργίας του καταστήματος ΤΖΑΦΕΡΗΣ στην Έδεσσα." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Επικοινωνία</span>
      <h1 className="mt-2 font-display text-5xl font-bold">Ελάτε να μας γνωρίσετε</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          {[
            { icon: MapPin, title: "Διεύθυνση", text: "Ρήγα Φεραίου 2, Έδεσσα 582 00" },
            { icon: Phone, title: "Τηλέφωνο", text: "2381 024884", href: "tel:+302381024884" },
            { icon: Clock, title: "Ωράριο", text: "Καθημερινά έως 15:00" },
          ].map((c, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</div>
                {c.href ? (
                  <a href={c.href} className="font-display text-xl font-bold text-foreground hover:text-primary">{c.text}</a>
                ) : (
                  <div className="font-display text-xl font-bold text-foreground">{c.text}</div>
                )}
              </div>
            </div>
          ))}

          <a
            href="https://www.google.com/maps/search/?api=1&query=Riga+Fereou+2+Edessa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition-transform hover:scale-105"
          >
            <Navigation className="h-4 w-4" /> Οδηγίες πλοήγησης
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
          <iframe
            title="Χάρτης ΤΖΑΦΕΡΗΣ"
            src="https://www.google.com/maps?q=Riga+Fereou+2+Edessa&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
