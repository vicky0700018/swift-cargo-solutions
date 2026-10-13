import { useRef, useState } from "react";
import { SERVICE_OPTIONS } from "./data.js";
import { read, write, uid, makeRef, logActivity } from "./store.js";
import { validateQuote, validateContact } from "./validation.js";
import { Field, Icon } from "./ui.jsx";

const emptyQuote = { fullName: "", company: "", email: "", phone: "", service: "", shipmentType: "", origin: "", destination: "", cargo: "", weight: "", date: "", notes: "" };

function useFormState(initial) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const bind = (k) => ({
    id: k, name: k, value: values[k],
    "aria-invalid": errors[k] ? "true" : undefined,
    "aria-describedby": errors[k] ? `${k}-err` : undefined,
    onChange: (e) => { setValues((v) => ({ ...v, [k]: e.target.value })); if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined })); },
    className: "field",
  });
  return { values, setValues, errors, setErrors, bind };
}

const DemoNotice = ({ children }) => (
  <p className="flex gap-2 rounded-md border border-accent/40 bg-accent/10 p-3 text-sm text-foreground/80">
    <Icon name="shield" className="h-5 w-5 shrink-0 text-accent" />{children}
  </p>
);

export function QuoteForm({ initialService = "" }) {
  const f = useFormState({ ...emptyQuote, service: SERVICE_OPTIONS.includes(initialService) ? initialService : "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(null);
  const busy = useRef(false);

  const submit = (e) => {
    e.preventDefault();
    if (busy.current) return;
    const errs = validateQuote(f.values);
    f.setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(Object.keys(errs)[0])?.focus();
      return;
    }
    busy.current = true;
    setLoading(true);
    setTimeout(() => {
      const ref = makeRef("SSCF");
      const rec = { id: uid(), ref, ...f.values, status: "New", createdAt: new Date().toISOString() };
      write("quotes", [rec, ...read("quotes")]);
      logActivity(`New quote request ${ref} from ${rec.fullName}`);
      f.setValues(emptyQuote);
      setDone(ref);
      setLoading(false);
      busy.current = false;
    }, 900);
  };

  if (done) return (
    <div className="rounded-lg border bg-card p-8 text-center" role="status">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success"><Icon name="check" className="h-7 w-7" /></span>
      <h3 className="mt-4 text-2xl font-bold">Enquiry saved</h3>
      <p className="mt-2 text-muted-foreground">Your reference number is</p>
      <p className="mt-1 font-display text-2xl font-extrabold tracking-wider text-primary">{done}</p>
      <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">This is a demonstration. Your enquiry has been stored in this browser only — no booking was made and no email was sent.</p>
      <button className="btn btn-outline mt-6" onClick={() => setDone(null)}>Submit another enquiry</button>
    </div>
  );

  const b = f.bind, er = f.errors;
  return (
    <form onSubmit={submit} noValidate className="space-y-6">
      <DemoNotice>Demonstration form: submissions are saved in this browser only. No shipment booking, email or communication takes place.</DemoNotice>
      <fieldset className="grid gap-5 md:grid-cols-2">
        <legend className="mb-3 font-display text-lg font-bold">Your details</legend>
        <Field label="Full Name" id="fullName" required error={er.fullName}><input {...b("fullName")} autoComplete="name" /></Field>
        <Field label="Company Name" id="company"><input {...b("company")} autoComplete="organization" /></Field>
        <Field label="Email Address" id="email" required error={er.email}><input type="email" {...b("email")} autoComplete="email" /></Field>
        <Field label="Phone Number" id="phone" required error={er.phone}><input type="tel" {...b("phone")} autoComplete="tel" placeholder="+91 98XXX XXXXX" /></Field>
      </fieldset>
      <fieldset className="grid gap-5 md:grid-cols-2">
        <legend className="mb-3 font-display text-lg font-bold">Shipment details</legend>
        <Field label="Service Required" id="service" required error={er.service}>
          <select {...b("service")}><option value="">Select a service</option>{SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}</select>
        </Field>
        <Field label="Shipment Type" id="shipmentType" required error={er.shipmentType}>
          <select {...b("shipmentType")}><option value="">Select type</option><option>Domestic</option><option>International</option></select>
        </Field>
        <Field label="Origin City or Port" id="origin" required error={er.origin}><input {...b("origin")} /></Field>
        <Field label="Destination City or Port" id="destination" required error={er.destination}><input {...b("destination")} /></Field>
        <div className="md:col-span-2"><Field label="Cargo Description" id="cargo" required error={er.cargo}><textarea rows={3} {...b("cargo")} /></Field></div>
        <Field label="Approximate Cargo Weight" id="weight"><input {...b("weight")} placeholder="e.g. 2,500 kg" /></Field>
        <Field label="Expected Shipment Date" id="date"><input type="date" {...b("date")} /></Field>
        <div className="md:col-span-2"><Field label="Additional Requirements" id="notes"><textarea rows={3} {...b("notes")} /></Field></div>
      </fieldset>
      <button type="submit" className="btn btn-primary w-full md:w-auto" disabled={loading}>
        {loading ? "Saving enquiry…" : "Submit Quote Request"}
      </button>
    </form>
  );
}

const emptyContact = { name: "", email: "", phone: "", subject: "", message: "" };

export function ContactForm() {
  const f = useFormState(emptyContact);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const busy = useRef(false);
  const submit = (e) => {
    e.preventDefault();
    if (busy.current) return;
    const errs = validateContact(f.values);
    f.setErrors(errs);
    if (Object.keys(errs).length) { document.getElementById(`c-${Object.keys(errs)[0]}`)?.focus(); return; }
    busy.current = true; setLoading(true);
    setTimeout(() => {
      const rec = { id: uid(), ...f.values, status: "New", createdAt: new Date().toISOString() };
      write("contacts", [rec, ...read("contacts")]);
      logActivity(`New contact message from ${rec.name}`);
      f.setValues(emptyContact); setDone(true); setLoading(false); busy.current = false;
    }, 700);
  };
  const b = (k) => ({ ...f.bind(k), id: `c-${k}`, "aria-describedby": f.errors[k] ? `c-${k}-err` : undefined });
  const er = f.errors;
  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      {done && <p role="status" className="flex items-center gap-2 rounded-md bg-success/10 p-3 text-sm font-semibold text-success"><Icon name="check" className="h-5 w-5" />Thank you — your message has been saved in this browser for the demo. No email was sent.</p>}
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" id="c-name" required error={er.name}><input {...b("name")} autoComplete="name" /></Field>
        <Field label="Email" id="c-email" required error={er.email}><input type="email" {...b("email")} autoComplete="email" /></Field>
        <Field label="Phone" id="c-phone" required error={er.phone}><input type="tel" {...b("phone")} autoComplete="tel" /></Field>
        <Field label="Subject" id="c-subject" required error={er.subject}><input {...b("subject")} /></Field>
      </div>
      <Field label="Message" id="c-message" required error={er.message}><textarea rows={5} {...b("message")} /></Field>
      <p className="text-xs text-muted-foreground">Notice: data you submit is stored locally in your current browser only.</p>
      <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? "Sending…" : "Send Message"}</button>
    </form>
  );
}
