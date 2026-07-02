import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Seo from "@/components/Seo";
import { getCity, cities } from "@/data/cities";
import {
  MapPin,
  CheckCircle,
  Building,
  Home as HomeIcon,
  Fence,
  Brush,
  Shield,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with premium paints and expert prep.",
    href: "/exterior-painting",
  },
  {
    icon: HomeIcon,
    title: "Interior Painting",
    description: "Transform your living spaces with clean, professional interior painting.",
    href: "/interior-painting",
  },
  {
    icon: Fence,
    title: "Deck & Fence Staining",
    description: "Preserve and enhance your outdoor wood surfaces with durable stains.",
    href: "/deck-fence-staining",
  },
  {
    icon: Brush,
    title: "Power Washing",
    description: "Thorough surface prep and cleaning for a longer-lasting finish.",
    href: "/power-washing",
  },
];

export default function CityLanding() {
  const { city: slug } = useParams();
  const city = getCity(slug);

  if (!city) {
    return <Navigate to="/service-areas" replace />;
  }

  const nearbyCities = city.nearby
    .map((s) => cities.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: "TTM Painting",
    image: "https://ttmpainting.com/ttm-logo.png",
    url: `https://ttmpainting.com/painters/${city.slug}`,
    telephone: "+1-630-277-9414",
    email: "info@ttmpainting.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "IL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.geo.lat,
      longitude: city.geo.lng,
    },
    areaServed: { "@type": "City", name: `${city.name}, IL` },
  };

  return (
    <div>
      <Seo title={city.title} description={city.description} path={`/painters/${city.slug}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <MapPin className="h-4 w-4 mr-1 inline" />
              {city.tagline}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              House Painters in
              <span className="text-accent"> {city.name}, IL</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional interior and exterior painting for {city.name} homeowners — backed by
              premium Sherwin-Williams products and a 1-3 year workmanship warranty.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/get-estimate">Get a Free {city.name} Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted Painters Serving {city.name}
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground">
            {city.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p>{city.localContext}</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {city.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                <span className="text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Painting Services in {city.name}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete interior and exterior painting, plus staining and power washing, for every
              {" "}
              {city.name} home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover-lift bg-card border border-border shadow-soft hover:shadow-strong overflow-hidden transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5 shadow-md">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link" asChild className="p-0 h-auto font-semibold text-primary">
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why TTM */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10 mb-3">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="font-semibold">Licensed & Insured</div>
              <div className="text-sm text-muted-foreground">Full coverage for your peace of mind</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10 mb-3">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="font-semibold">1-3 Year Warranty</div>
              <div className="text-sm text-muted-foreground">Guaranteed workmanship quality</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10 mb-3">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="font-semibold">Local & Responsive</div>
              <div className="text-sm text-muted-foreground">Based right here on the North Shore</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby towns (internal links) */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Also Serving Nearby</h2>
            <p className="text-muted-foreground mb-8">
              TTM Painting works throughout Evanston and Chicago's North Shore. Explore painting
              services in nearby communities:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyCities.map((c) => (
                <Button key={c.slug} variant="outline" asChild>
                  <Link to={`/painters/${c.slug}`}>Painters in {c.name}</Link>
                </Button>
              ))}
              <Button variant="outline" asChild>
                <Link to="/service-areas">View All Service Areas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Transform Your {city.name} Home?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a free, no-pressure estimate from a local painting team that treats your home like
            its own.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg" asChild>
            <Link to="/get-estimate">
              Get Your Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
