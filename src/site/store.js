import { useSyncExternalStore } from "react";
import {
  defaultSettings, defaultHome, defaultServices, defaultIndustries, defaultGallery,
  defaultFooter, defaultQuotes, defaultContacts,
} from "./data.js";

const PREFIX = "sscf_";

export const DEFAULTS = {
  settings: defaultSettings,
  home: defaultHome,
  services: defaultServices,
  industries: defaultIndustries,
  gallery: defaultGallery,
  footer: defaultFooter,
  quotes: defaultQuotes,
  contacts: defaultContacts,
  activity: [],
  session: null,
};

const cache = {};
const listeners = new Set();
const emit = () => listeners.forEach((l) => l());
const subscribe = (l) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

function isValidShape(def, val) {
  if (def === null) return true;
  if (Array.isArray(def)) return Array.isArray(val);
  if (typeof def === "object") return val && typeof val === "object" && !Array.isArray(val);
  return true;
}

export function read(key) {
  const def = DEFAULTS[key];
  if (typeof window === "undefined") return def;
  if (key in cache) return cache[key];
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (raw == null) {
      if (def !== null) window.localStorage.setItem(PREFIX + key, JSON.stringify(def));
      cache[key] = def;
    } else {
      const parsed = JSON.parse(raw);
      // merge objects so newly added default fields appear
      cache[key] = !isValidShape(def, parsed)
        ? def
        : def && typeof def === "object" && !Array.isArray(def)
          ? { ...def, ...parsed }
          : parsed;
    }
  } catch {
    cache[key] = def;
  }
  return cache[key];
}

export function write(key, value) {
  cache[key] = value;
  try {
    if (value === null) window.localStorage.removeItem(PREFIX + key);
    else window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* storage full or unavailable */
  }
  emit();
}

export function useData(key) {
  return useSyncExternalStore(subscribe, () => read(key), () => DEFAULTS[key]);
}

export function logActivity(message) {
  const list = read("activity") || [];
  write("activity", [{ id: uid(), message, at: new Date().toISOString() }, ...list].slice(0, 30));
}

export function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export function makeRef(prefix) {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  return `${prefix}-${ymd}-${Math.floor(1000 + Math.random() * 9000)}`;
}

export function resetKeys(keys) {
  keys.forEach((k) => write(k, DEFAULTS[k]));
}

// ---- Demo auth (frontend only, not secure) ----
export const DEMO_EMAIL = "admin@shreesiddhivinayak.com";
export const DEMO_PASSWORD = "Admin@123";

export function checkCredentials(email, password) {
  return email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD;
}

export function login(email, password) {
  if (!checkCredentials(email, password)) return false;
  write("session", { email: DEMO_EMAIL, at: new Date().toISOString() });
  logActivity("Admin signed in");
  return true;
}

export function logout() {
  write("session", null);
}

export function toCSV(rows, columns) {
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [columns.map((c) => esc(c.label)).join(","), ...rows.map((r) => columns.map((c) => esc(r[c.key])).join(","))].join("\n");
}

export function downloadCSV(filename, csv) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
}
