import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useData } from "./store.js";
import { Icon } from "./ui.jsx";

const NAV = [
  { label: "Home", to: "/", exact: true },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Our Process", to: "/process" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

const REQUIRED_CREDIT = "Designed and development by SOSynch Ai Tech";

function Logo({ light }) {
  const s = useData("settings");
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${s.businessName} home`}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
        <Icon name="ship" className="h-6 w-6" />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[15px] font-extrabold uppercase tracking-wide ${light ? "text-navy-foreground" : "text-navy"}`}>Shree Siddhivinayak</span>
        <span className={`block text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>Clearing & Forwarding</span>
      </span>
    </Link>
  );
}

export function Header() {
  const s = useData("settings");
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy-deep text-navy-foreground/85 md:block">
        <div className="container-x flex h-10 items-center justify-between text-sm">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4 text-accent" />{s.location}, Maharashtra</span>
          <div className="flex items-center gap-6">
            <a href={`mailto:${s.email}`} className="flex items-center gap-2 hover:text-navy-foreground"><Icon name="mail" className="h-4 w-4 text-accent" />{s.email}</a>
            <a href={`tel:${s.phone}`} className="flex items-center gap-2 hover:text-navy-foreground"><Icon name="phone" className="h-4 w-4 text-accent" />{s.phone}</a>
          </div>
        </div>
      </div>
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: !!n.exact }}
                className="relative rounded px-3 py-2 text-[15px] font-semibold text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "!text-primary after:absolute after:inset-x-3 after:-bottom-[1px] after:h-0.5 after:bg-accent" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/quote" className="btn btn-primary hidden sm:inline-flex">{s.primaryCta}</Link>
            <button className="rounded-md border p-2 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
              <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t bg-background lg:hidden" aria-label="Mobile">
            <div className="container-x flex flex-col py-3">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} activeOptions={{ exact: !!n.exact }} onClick={() => setOpen(false)}
                  className="rounded px-3 py-3 font-semibold text-foreground/85 hover:bg-muted" activeProps={{ className: "!text-primary bg-muted" }}>
                  {n.label}
                </Link>
              ))}
              <Link to="/quote" onClick={() => setOpen(false)} className="btn btn-primary mt-2">{s.primaryCta}</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  const s = useData("settings");
  const f = useData("footer");
  return (
    <footer className="bg-navy text-navy-foreground/80">
      <div className="h-1 bg-accent" />
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed">{s.footerDescription}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-navy-foreground">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {f.quickLinks.map((l, i) => <li key={i}><Link to={l.to} className="hover:text-accent">{l.label}</Link></li>)}
            <li><Link to="/quote" className="hover:text-accent">Request a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-navy-foreground">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {f.serviceLinks.map((l, i) => <li key={i}><Link to={l.to} className="hover:text-accent">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-navy-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{s.address}</li>
            <li><a href={`tel:${s.phone}`} className="flex gap-3 hover:text-accent"><Icon name="phone" className="h-4 w-4 text-accent" />{s.phone}</a></li>
            <li><a href={`mailto:${s.email}`} className="flex gap-3 break-all hover:text-accent"><Icon name="mail" className="h-4 w-4 shrink-0 text-accent" />{s.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-x flex flex-col gap-3 py-5 text-xs md:flex-row md:items-center md:justify-between">
          <p>{f.copyright}</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-semibold text-navy-foreground">{REQUIRED_CREDIT}</span>
            <Link to="/admin-login" className="underline-offset-4 hover:text-accent hover:underline">Admin Login</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PublicLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[80] focus:bg-background focus:p-2">Skip to content</a>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
