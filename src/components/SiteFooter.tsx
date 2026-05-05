import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="font-display text-xl font-bold">ΤΖΑΦΕΡΗΣ</div>
          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">φρούτα & λαχανικά</div>
          <p className="mt-4 text-sm text-muted-foreground">
            Φρέσκα προϊόντα κάθε μέρα στην Έδεσσα. Από τους παραγωγούς, στο τραπέζι σας.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <h3 className="mb-2 font-display text-base font-semibold">Επικοινωνία</h3>
          <p className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4 text-primary" /> Ρήγα Φεραίου 2, Έδεσσα 582 00</p>
          <p className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4 text-primary" /> 2381 024884</p>
          <p className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4 text-primary" /> Καθημερινά έως 15:00</p>
        </div>
        <div className="space-y-2 text-sm">
          <h3 className="mb-2 font-display text-base font-semibold">Πλοήγηση</h3>
          <Link to="/products" className="block text-muted-foreground hover:text-primary">Προϊόντα</Link>
          <Link to="/about" className="block text-muted-foreground hover:text-primary">Το κατάστημα</Link>
          <Link to="/contact" className="block text-muted-foreground hover:text-primary">Επικοινωνία</Link>
          <Link to="/" className="block text-muted-foreground hover:text-primary">Αρχική</Link>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ΤΖΑΦΕΡΗΣ — Φρούτα & Λαχανικά, Έδεσσα
      </div>
    </footer>
  );
}
