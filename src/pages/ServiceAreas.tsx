import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Seo from "@/components/Seo";
import { cities } from "@/data/cities";
import {
  MapPin,
  Home,
  Car,
  CheckCircle
} from "lucide-react";

const mainAreas = [
  {
    region: "Evanston & Skokie",
    cities: ["Evanston", "Skokie", "Morton Grove", "Lincolnwood", "Niles"],
    description: "Our home base and primary service area"
  },
  {
    region: "Central North Shore",
    cities: ["Wilmette", "Kenilworth", "Winnetka", "Glencoe", "Northfield"],
    description: "The heart of Chicago's North Shore"
  },
  {
    region: "North Shore Lakefront",
    cities: ["Highland Park", "Highwood", "Lake Forest", "Lake Bluff", "Glencoe"],
    description: "Lakeside homes and historic estates"
  },
  {
    region: "Glenview & Northbrook",
    cities: ["Glenview", "Northbrook", "Deerfield", "Riverwoods", "Bannockburn"],
    description: "Established neighborhoods west of the lake"
  },
  {
    region: "Near North Suburbs",
    cities: ["Wilmette", "Kenilworth", "Golf", "Glenview", "Skokie"],
    description: "Quick, reliable service close to home"
  },
  {
    region: "North Chicago",
    cities: ["Rogers Park", "Edgewater", "West Ridge", "Andersonville", "Uptown"],
    description: "Chicago neighborhoods bordering the North Shore"
  }
];

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    description: "Complete home painting services including exterior and interior projects"
  },
  {
    icon: Car,
    title: "Commercial Projects",
    description: "Business and commercial property painting with flexible scheduling"
  },
  {
    icon: MapPin,
    title: "Power Washing & Staining",
    description: "Deck staining, fence staining, and power washing services"
  }
];

export default function ServiceAreas() {
  return (
    <div>
      <Seo
        title="Service Areas | Evanston & Chicago's North Shore | TTM Painting"
        description="TTM Painting serves Evanston, Wilmette, Winnetka, Glencoe, Highland Park, Lake Forest, Glenview, Northbrook, Skokie and the rest of Chicago's North Shore. Free local estimates."
      />
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Service Areas
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Serving Evanston &
              <span className="text-accent"> the North Shore</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Based in Evanston, we provide professional interior and exterior painting throughout Chicago's North Shore — from Rogers Park to Lake Forest and everywhere in between.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/get-estimate">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Where We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Focused, local coverage across Evanston and the communities of Chicago's North Shore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainAreas.map((area, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <MapPin className="h-5 w-5 text-accent mr-2" />
                    {area.region}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {area.cities.map((city, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-success mr-2 flex-shrink-0" />
                        {city}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Town */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Painters in Your Town</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore dedicated painting services for each North Shore community we serve.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {cities.map((c) => (
              <Button key={c.slug} variant="outline" asChild className="group h-auto py-4 justify-center">
                <Link to={`/painters/${c.slug}`} className="text-center">
                  <MapPin className="mr-2 inline h-4 w-4 text-accent transition-colors group-hover:text-black" />
                  {c.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Available in All Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete painting and related services available throughout the North Shore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Local Matters</h2>
              <p className="text-xl text-muted-foreground">
                Being based on the North Shore means faster scheduling, shorter drives, and painters who know the neighborhood.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">The North Shore Advantage</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Evanston Base:</span> A central North Shore location means efficient service to every community we serve
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">No Travel Charges:</span> Our pricing includes travel anywhere on the North Shore
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Reliable Scheduling:</span> Staying local keeps our calendar tight and our crews on time
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Local Knowledge:</span> We know North Shore architecture, HOA expectations, and lakefront weather
                    </div>
                  </li>
                </ul>
              </div>
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-center">Service Area Coverage</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold">South to North</div>
                      <div className="text-muted-foreground">Rogers Park → Lake Forest</div>
                    </div>
                    <div>
                      <div className="font-semibold">Lakefront to Inland</div>
                      <div className="text-muted-foreground">Winnetka → Glenview & Northbrook</div>
                    </div>
                    <div className="bg-accent/5 p-4 rounded-lg mt-6">
                      <div className="font-semibold text-accent">Home Base</div>
                      <div className="text-muted-foreground">Evanston, Illinois</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Don't See Your City */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Town?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We focus on the North Shore, but we're always happy to talk. If you're near Evanston or anywhere along the North Shore and need professional painting, give us a call — we may be able to help!
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/get-estimate">Ask About Your Area</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started in Your Neighborhood?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Professional painting services available throughout Evanston and Chicago's North Shore.
          </p>
          <Button size="lg" variant="accent" asChild>
            <Link to="/get-estimate">Get Free Local Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
