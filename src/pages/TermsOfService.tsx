import Seo from "@/components/Seo";

const sections = [
  {
    title: "Use of Website",
    body:
      "You may use this website only for lawful purposes related to learning about our company, requesting estimates, or contacting us about services. You agree not to misuse the website, interfere with its operation, or attempt to gain unauthorized access to any portion of the site or connected systems.",
  },
  {
    title: "No Guarantee of Website Availability",
    body:
      "We may update, suspend, or discontinue any part of the website at any time without notice. We do not guarantee that the website will always be available, uninterrupted, secure, or error-free.",
  },
  {
    title: "Estimate Requests and Communications",
    body:
      "Submitting an estimate request or contacting us through the website does not create a binding service agreement. Project scope, pricing, scheduling, and warranty terms are governed only by a separate written agreement or approved estimate between you and TTM Painting.",
  },
  {
    title: "Intellectual Property",
    body:
      "All website content, including text, branding, graphics, images, layout, and other materials, is owned by or licensed to TTM Painting and may not be copied, reproduced, distributed, or used without permission except as allowed by law.",
  },
  {
    title: "Third-Party Services and Links",
    body:
      "The website may include links to third-party websites or embedded third-party tools. We do not control and are not responsible for the content, terms, availability, or practices of those third parties.",
  },
  {
    title: "Disclaimer",
    body:
      "This website and its content are provided on an as-is and as-available basis without warranties of any kind, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement, to the fullest extent permitted by law.",
  },
  {
    title: "Limitation of Liability",
    body:
      "To the fullest extent permitted by law, TTM Painting will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website, even if we have been advised of the possibility of such damages.",
  },
  {
    title: "Indemnification",
    body:
      "You agree to indemnify and hold harmless TTM Painting from claims, damages, liabilities, and expenses arising from your misuse of the website, your violation of these Terms, or your infringement of any rights of another person or entity.",
  },
  {
    title: "Governing Law",
    body:
      "These Terms are governed by the laws of the State of Illinois, without regard to conflict of law principles. Any dispute relating to these Terms or the website will be subject to the applicable courts located in Illinois, unless otherwise required by law.",
  },
  {
    title: "Changes to These Terms",
    body:
      "We may revise these Terms of Service at any time by posting an updated version on this page. Your continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-muted/40">
      <Seo
        title="Terms of Service | TTM Painting"
        description="Review the TTM Painting Terms of Service governing the use of our website, estimate requests, and customer communications."
        path="/terms"
      />

      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Legal
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              These Terms of Service govern your use of the TTM Painting website and any
              inquiries or estimate requests submitted through it.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: July 3, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl border bg-white p-8 shadow-soft md:p-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">Agreement</h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  By accessing or using this website, you agree to be bound by these Terms
                  of Service. If you do not agree, you should not use the website.
                </p>
              </div>

              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{section.body}</p>
                </div>
              ))}

              <div>
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Questions about these Terms of Service can be sent to TTM Painting at{" "}
                  <a className="text-primary hover:underline" href="mailto:info@ttmpainting.com">info@ttmpainting.com</a> or{" "}
                  <a className="text-primary hover:underline" href="tel:+16302779414">(630) 277-9414</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
