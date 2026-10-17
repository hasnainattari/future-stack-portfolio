import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, MapPin, Send } from "lucide-react";
import { activeSocials, portfolioData } from "@/data/data";
import { Container, SocialLinks } from "@/components/ui/portfolio-kit";
import { useReveal } from "@/lib/motion";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  subject: z.string().trim().min(3, "Add a short subject").max(120),
  message: z.string().trim().min(10, "Tell me a little more (10+ characters)").max(2000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { name: "subject", label: "Subject", type: "text", placeholder: "Project enquiry" },
] as const;

export function Contact() {
  const { contact, personal, sections } = portfolioData;
  const ref = useReveal<HTMLElement>();
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  if (!sections.contact.enabled) return null;

  // No backend is configured: the form composes an email in the visitor's
  // mail app instead of pretending a message was sent.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] ??= i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, email, subject, message } = parsed.data;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const input =
    "mt-2 w-full rounded-md border border-inverse-border bg-transparent px-3.5 py-3 text-inverse-foreground placeholder:text-inverse-muted focus:border-inverse-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <section id={sections.contact.id} ref={ref} className="scroll-mt-16 bg-inverse py-20 text-inverse-foreground sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p data-reveal className="eyebrow !text-inverse-muted">{sections.contact.eyebrow}</p>
          <h2 data-reveal className="mt-6 font-display text-display-md font-semibold tracking-tight">
            {contact.heading}
          </h2>
          <p data-reveal className="mt-4 max-w-md text-inverse-muted">{contact.description}</p>
          <ul data-reveal className="mt-10 space-y-3 text-sm">
            <li>
              <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-2 hover:underline">
                <Mail size={15} /> {personal.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-inverse-muted"><MapPin size={15} /> {personal.location}</li>
          </ul>
          <div data-reveal className="mt-8 [&_a]:border-inverse-border [&_a]:text-inverse-muted [&_a:hover]:text-inverse-foreground">
            <SocialLinks links={activeSocials} />
          </div>
        </div>

        <form data-reveal noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
          {fields.map((f) => (
            <label key={f.name} className={f.name === "subject" ? "sm:col-span-2" : ""}>
              <span className="text-sm">{f.label}</span>
              <input name={f.name} type={f.type} placeholder={f.placeholder} aria-invalid={!!errors[f.name]} aria-describedby={`${f.name}-err`} className={input} />
              {errors[f.name] && <span id={`${f.name}-err`} className="mt-1 block text-xs text-destructive-soft">{errors[f.name]}</span>}
            </label>
          ))}
          <label className="sm:col-span-2">
            <span className="text-sm">Message</span>
            <textarea name="message" rows={5} placeholder="What are you building?" aria-invalid={!!errors.message} aria-describedby="message-err" className={input} />
            {errors.message && <span id="message-err" className="mt-1 block text-xs text-destructive-soft">{errors.message}</span>}
          </label>
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-inverse-muted" aria-live="polite">
              {opened ? "Your email app should now be open with the message ready to send." : contact.formNote}
            </p>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-inverse-foreground px-5 py-3 text-sm font-medium text-inverse transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Compose email <Send size={14} />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
