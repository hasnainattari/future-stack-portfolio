import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { z } from "zod";
import { Section } from "./Section";
import { Check, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  subject: z.string().trim().min(3, "Add a short subject").max(120),
  message: z.string().trim().min(10, "Tell me a little more").max(1000),
});


function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-neon-violet focus:ring-2 focus:ring-neon-violet/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}


export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<
    Partial<Record<"name" | "email" | "subject" | "message", string>>
  >({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: typeof errors = {};
      for (const iss of parsed.error.issues) {
        errs[iss.path[0] as keyof typeof errs] = iss.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 900);
  };


  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let&rsquo;s build something <span className="text-gradient-brand">unforgettable</span></>}
      description="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.25fr]">
        <div className="rounded-3xl glass-strong p-8">
          <h3 className="font-display text-xl font-semibold">Reach me</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            I usually reply within a day. For urgent work, ping me on LinkedIn.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl glass">
                <Mail size={14} />
              </span>
              <a href="mailto:hasnainattari096@gmail.com" className="hover:text-foreground">hasnainattari096@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl glass">
                <MapPin size={14} />
              </span>
              Liyari, Karachi, Pakistan · Remote worldwide
            </li>
          </ul>
          <div className="mt-8 flex items-center gap-2">
            {[
              { Icon: Github, href: "https://github.com/hasnainattari", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/hasnain-the-dev/", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-10 place-items-center rounded-full glass hover:bg-white/10 hover:shadow-glow"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <div className="mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.4_0.2_295/0.5),transparent_60%),radial-gradient(circle_at_70%_80%,oklch(0.4_0.2_200/0.5),transparent_60%)]">
            <div className="grid h-full place-items-center">
              <div className="text-center">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Currently</div>
                <div className="mt-2 font-display text-2xl font-bold text-gradient-brand">Karachi, PK</div>
                <div className="mt-1 text-xs text-muted-foreground">24.8607° N, 67.0011° E</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="relative rounded-3xl glass-strong p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Your name" name="name" placeholder="Jane Cooper" error={errors.name} />
            <Field label="Email" name="email" type="email" placeholder="jane@company.com" error={errors.email} />
          </div>
          <div className="mt-5">
            <Field label="Subject" name="subject" placeholder="New landing page for our SaaS" error={errors.subject} />
          </div>
          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              aria-invalid={!!errors.message}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-neon-violet focus:ring-2 focus:ring-neon-violet/20"
              placeholder="Tell me about your project…"
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>

          <div className="mt-6 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              By submitting you agree to a friendly, spam-free follow-up.
            </p>
            <motion.button
              whileHover={{ scale: status === "idle" ? 1.04 : 1 }}
              whileTap={{ scale: 0.96 }}
              disabled={status !== "idle"}
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-black shadow-glow disabled:opacity-70 sm:w-auto"
            >
              {status === "sent" ? (
                <><Check size={14} /> Sent</>
              ) : status === "sending" ? (
                "Sending…"
              ) : (
                <><Send size={14} /> Send message</>
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {status === "sent" && (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role="status"
                aria-live="polite"
                className="absolute inset-0 grid place-items-center rounded-3xl bg-background/85 backdrop-blur-xl"
              >
                <div className="px-8 text-center">
                  <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-brand text-black shadow-glow"
                  >
                    <Check size={26} strokeWidth={3} />
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mt-5 font-display text-2xl font-bold"
                  >
                    Message sent
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-2 text-sm text-muted-foreground"
                  >
                    Thanks for reaching out — I&rsquo;ll get back to you within a day.
                  </motion.p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-full glass px-5 py-2 text-sm hover:bg-white/10"
                  >
                    Send another
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

      </div>
    </Section>
  );
}