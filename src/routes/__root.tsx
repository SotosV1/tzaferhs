import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Link } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Η σελίδα δεν βρέθηκε</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Η σελίδα που ψάχνετε δεν υπάρχει ή έχει μετακινηθεί.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Αρχική
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ΤΖΑΦΕΡΗΣ — Φρούτα & Λαχανικά" },
      { name: "description", content: "Φρέσκα φρούτα και λαχανικά καθημερινά στην Έδεσσα. Επισκεφθείτε μας στη Ρήγα Φεραίου 2." },
      { name: "author", content: "ΤΖΑΦΕΡΗΣ" },
      { property: "og:title", content: "ΤΖΑΦΕΡΗΣ — Φρούτα & Λαχανικά" },
      { property: "og:description", content: "Φρέσκα φρούτα και λαχανικά καθημερινά στην Έδεσσα." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ΤΖΑΦΕΡΗΣ — Φρούτα & Λαχανικά" },
      { name: "twitter:description", content: "Φρέσκα φρούτα και λαχανικά καθημερινά στην Έδεσσα." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/852d248c-eb72-4dfd-bc8d-577ebe4bc1f8/id-preview-a41fc73e--5e9780dc-591c-4134-b0cb-8b9ea931e51f.lovable.app-1777875827314.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/852d248c-eb72-4dfd-bc8d-577ebe4bc1f8/id-preview-a41fc73e--5e9780dc-591c-4134-b0cb-8b9ea931e51f.lovable.app-1777875827314.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
