import Seo from "@/components/Seo";

const sections = [
  {
    title: "Information We Collect",
    body:
      "We may collect information you provide directly to us, including your name, phone number, email address, property address, project details, attachments, and any other information you choose to submit through our estimate forms or by contacting us.",
  },
  {
    title: "How We Use Information",
    body:
      "We use your information to respond to inquiries, prepare estimates, schedule services, communicate about projects, improve our website and customer experience, and maintain our internal business records.",
  },
  {
    title: "Sharing of Information",
    body:
      "We do not sell your personal information. We may share information with service providers and software platforms that help us operate our business, process requests, manage customer communications, or host website functionality. We may also disclose information when required by law or to protect our rights.",
  },
  {
    title: "Cookies and Analytics",
    body:
      "Our website may use cookies, server logs, and analytics tools to understand site usage, improve performance, and measure marketing effectiveness. These tools may collect device, browser, and usage information.",
  },
  {
    title: "Data Security",
    body:
      "We use reasonable administrative, technical, and organizational measures to protect personal information. No method of internet transmission or electronic storage is completely secure, so we cannot guarantee absolute security.",
  },
  {
    title: "Data Retention",
    body:
      "We retain personal information for as long as reasonably necessary to provide services, maintain records, resolve disputes, comply with legal obligations, and enforce our agreements.",
  },
  {
    title: "Your Choices",
    body:
      "You may contact us to update your information, request that we delete certain information where appropriate, or opt out of non-essential communications. Some information may be retained when required for legitimate business or legal purposes.",
  },
  {
    title: "Third-Party Links",
    body:
      "This website may contain links to third-party websites or embedded third-party tools. We are not responsible for the privacy practices, content, or policies of those third parties.",
  },
  {
    title: "Children's Privacy",
    body:
      "Our website and services are intended for adults seeking residential or commercial painting services. We do not knowingly collect personal information from children under 13.",
  },
  {
    title: "Changes to This Policy",
    body:
      "We may update this Privacy Policy from time to time. Updates become effective when posted on this page. Your continued use of the website after changes are posted constitutes acceptance of the revised policy.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-muted/40">
      <Seo
        title="Privacy Policy | TTM Painting"
        description="Review the TTM Painting Privacy Policy for information about how we collect, use, and protect information submitted through our website."
        path="/privacy"
      />

      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Legal
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              This Privacy Policy explains how TTM Painting collects, uses, and protects
              information submitted through our website and customer inquiry forms.
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
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  By using this website or submitting information to TTM Painting, you agree
                  to the practices described in this Privacy Policy.
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
                  If you have questions about this Privacy Policy, you may contact TTM
                  Painting at <a className="text-primary hover:underline" href="mailto:info@ttmpainting.com">info@ttmpainting.com</a> or{" "}
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
