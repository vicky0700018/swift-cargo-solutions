import { useEffect, useState } from "react";
import { FALLBACK_IMAGE } from "./data.js";

export function ReusableImage({ src, alt, className = "", fit = "cover", eager = false, ...rest }) {
  const [current, setCurrent] = useState(src || FALLBACK_IMAGE);
  useEffect(() => setCurrent(src || FALLBACK_IMAGE), [src]);
  return (
    <img
      src={current}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
      style={{ objectFit: fit }}
      onError={() => { if (current !== FALLBACK_IMAGE) setCurrent(FALLBACK_IMAGE); }}
      {...rest}
    />
  );
}

const paths = {
  phone: "M3 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 1 .76l1 4a1 1 0 0 1-.3 1L7.6 10.4a12 12 0 0 0 6 6l1.6-1.4a1 1 0 0 1 1-.3l4 1a1 1 0 0 1 .8 1V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5Z",
  mail: "M3 6h18v12H3zM3 6l9 7 9-7",
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  ship: "M3 17l2 3h14l2-3M5 17V11h14v6M8 11V7h8v4M12 3v4",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  truck: "M3 6h11v10H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-.1M17 19a2 2 0 1 0 0-.1",
  plane: "M2 16l20-6-2-2-7 1-5-6H6l2 6-4 1-2-2H1l1 4Z",
  box: "M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10",
  network: "M12 5a2 2 0 1 0 0-.1M5 19a2 2 0 1 0 0-.1M19 19a2 2 0 1 0 0-.1M12 7v5M12 12l-6 5M12 12l6 5",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4",
  layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  chat: "M4 5h16v11H8l-4 4z",
  check: "M5 12l5 5 9-10",
  clock: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  settings: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 12l2-1-2-4-2 1-2-1-1-2H10L9 6 7 7 5 6 3 10l2 1v2l-2 1 2 4 2-1 2 1 1 2h4l1-2 2-1 2 1 2-4-2-1z",
  home: "M3 11l9-7 9 7v9h-6v-6H9v6H3z",
  image: "M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M15 9a1.5 1.5 0 1 0 0-.1",
  inbox: "M3 13h5l1 3h6l1-3h5M5 5h14l2 8v6H3v-6z",
  link: "M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1",
  database: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  logout: "M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10",
  external: "M14 4h6v6M20 4l-9 9M18 14v6H4V6h6",
  factory: "M3 21V10l6 4V10l6 4V6l6 3v12z",
};

export function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name] || paths.box} />
    </svg>
  );
}

export const serviceIcon = { "freight-forwarding": "network", "customs-clearance": "shield", "import-export-documentation": "doc",
  "road-freight": "truck", "sea-freight": "ship", "air-cargo": "plane", "cargo-handling": "box", "supply-chain": "layers" };

export function SectionHeading({ eyebrow, title, text, light = false, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className={`eyebrow ${center ? "justify-center" : ""}`}>{eyebrow}</span>}
      <h2 className={`mt-3 text-3xl font-bold md:text-4xl ${light ? "text-navy-foreground" : "text-foreground"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg ${light ? "text-navy-foreground/75" : "text-muted-foreground"}`}>{text}</p>}
    </div>
  );
}

export function Field({ label, id, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">{label}{required && <span className="text-destructive"> *</span>}</label>
      {children}
      {error && <p id={`${id}-err`} className="field-error" role="alert">{error}</p>}
    </div>
  );
}

export function Modal({ open, title, children, onClose, wide = false }) {
  useEffect(() => {
    if (!open) return;
    const k = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-navy-deep/70 p-4 md:items-center" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={title} className={`w-full ${wide ? "max-w-3xl" : "max-w-lg"} rounded-lg bg-card p-6 shadow-2xl`} onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <button onClick={onClose} className="rounded p-1 text-muted-foreground hover:text-foreground" aria-label="Close"><Icon name="close" /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function ConfirmDialog({ open, title = "Are you sure?", message, confirmLabel = "Delete", onConfirm, onCancel }) {
  return (
    <Modal open={open} title={title} onClose={onCancel}>
      <p className="text-muted-foreground">{message}</p>
      <div className="mt-6 flex justify-end gap-2">
        <button className="btn btn-outline btn-sm" onClick={onCancel}>Cancel</button>
        <button className="btn btn-danger btn-sm" onClick={onConfirm}>{confirmLabel}</button>
      </div>
    </Modal>
  );
}

export function useToast() {
  const [msg, setMsg] = useState(null);
  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => setMsg(null), 2600);
    return () => clearTimeout(t);
  }, [msg]);
  const node = msg ? (
    <div role="status" className="fixed bottom-5 right-5 z-[70] flex items-center gap-2 rounded-md bg-navy px-4 py-3 text-sm font-semibold text-navy-foreground shadow-xl animate-rise">
      <Icon name="check" className="h-4 w-4 text-accent" /> {msg}
    </div>
  ) : null;
  return [node, setMsg];
}

export const formatDate = (iso) => {
  try { return new Date(iso).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }); } catch { return iso; }
};
