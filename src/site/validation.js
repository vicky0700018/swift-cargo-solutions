export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim());

// Accepts Indian (10 digits, optional +91/0) and international (+ and 8-15 digits) numbers.
export const isPhone = (v) => {
  const s = String(v).trim();
  if (!/^\+?[\d\s\-()]+$/.test(s)) return false;
  const digits = s.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
};

export const isImageUrl = (v) => {
  const s = String(v).trim();
  if (s.startsWith("/images/")) return true;
  try {
    const u = new URL(s);
    return u.protocol === "https:";
  } catch {
    return false;
  }
};

export function validateQuote(f) {
  const e = {};
  const req = ["fullName", "email", "phone", "service", "shipmentType", "origin", "destination", "cargo"];
  req.forEach((k) => { if (!String(f[k] || "").trim()) e[k] = "This field is required."; });
  if (f.email && !isEmail(f.email)) e.email = "Enter a valid email address.";
  if (f.phone && !isPhone(f.phone)) e.phone = "Enter a valid phone number (8–15 digits, + allowed).";
  return e;
}

export function validateContact(f) {
  const e = {};
  ["name", "email", "phone", "subject", "message"].forEach((k) => { if (!String(f[k] || "").trim()) e[k] = "This field is required."; });
  if (f.email && !isEmail(f.email)) e.email = "Enter a valid email address.";
  if (f.phone && !isPhone(f.phone)) e.phone = "Enter a valid phone number (8–15 digits, + allowed).";
  return e;
}
