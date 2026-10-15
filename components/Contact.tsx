import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contact, profile } from "@/data/portfolio";

export default function Contact({ formEnabled }: { formEnabled: boolean }) {
  const email = profile.email;

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page relative z-10">
        <Reveal delay={0.05} className="mb-12 flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Contact"
            title={contact.heading}
            description={contact.description}
            align="center"
          />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <Reveal delay={0.12} className="card p-8 sm:p-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-blush)] text-[color:var(--color-berry)]">
                    <Icon name="mail" size={18} />
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">Say hi</h3>
                    <p className="text-sm text-[color:var(--color-mauve)]">
                      I&apos;d love to connect with you
                    </p>
                  </div>
                </div>
                {email ? (
                  <a href={`mailto:${email}`} className="link-underline text-lg">
                    {email}
                  </a>
                ) : (
                  <p className="text-[color:var(--color-mauve)]">
                    Email will appear here once you add it to
                    <code className="ml-1 rounded bg-black/5 px-1 py-0.5">data/portfolio.ts</code>.
                  </p>
                )}
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-berry)]">
                    What I'm open to
                  </h4>
                  <ul className="grid gap-2 text-[color:var(--color-ink)]/90">
                    {contact.openTo.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Icon name="sparkle" size={16} className="text-[color:var(--color-petal)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-3 text-[color:var(--color-mauve)]">
                  <Icon name="lightbulb" size={18} className="text-[color:var(--color-berry)]" />
                  <p className="text-sm">
                    No fake testimonials or stats â€” just an honest student portfolio.
                  </p>
                </div>
              </div>
            </Reveal>
            {!formEnabled && (
              <Reveal delay={0.16} className="card mt-6 border-dashed p-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Icon name="info" size={18} className="text-[color:var(--color-berry)]" />
                    <h4 className="text-lg font-semibold">Contact form setup</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-[color:var(--color-mauve)]">
                    The contact form isn't connected to an email service yet. To enable
                    submissions, add the following environment variables (e.g. in
                    <code className="mx-1 rounded bg-black/5 px-1 py-0.5">.env.local</code>
                    for local development and on Vercel):
                  </p>
                  <ul className="grid gap-1 text-sm text-[color:var(--color-ink)]/90">
                    <li>
                      <code>RESEND_API_KEY</code> â€” your Resend API key
                    </li>
                    <li>
                      <code>CONTACT_TO_EMAIL</code> â€” the email address to receive messages
                    </li>
                    <li>
                      <code>CONTACT_FROM_EMAIL</code> (optional) â€” the &quot;from&quot; address
                    </li>
                  </ul>
                  <p className="text-sm text-[color:var(--color-mauve)]">
                    Redeploy after adding them. Until then, you can still reach out by
                    email if one is provided above.
                  </p>
                </div>
              </Reveal>
            )}
          </div>
          <Reveal delay={0.18} className="card p-6 sm:p-10">
            <ContactForm enabled={formEnabled} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}




