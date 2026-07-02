import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blueHouseAfter from "@/assets/blue-house-after.jpg";
import blueHouseBefore from "@/assets/blue-house-before.jpg";
import beigeHouseAfter from "@/assets/beige-house-after.jpg";
import beigeHouseBefore from "@/assets/beige-house-before.jpg";
import greenGarageAfter from "@/assets/green-garage-after.jpg";
import greenGarageBefore from "@/assets/green-garage-before.jpg";
import whiteHouseAfter from "@/assets/white-house-after.jpg";
import whiteHouseBefore from "@/assets/white-house-before.jpg";
import grayRanchBefore from "@/assets/gray-ranch-before.jpg";
import grayRanchAfter from "@/assets/gray-ranch-after.jpg";
import boardBattenBefore from "@/assets/board-batten-before.jpg";
import boardBattenAfter from "@/assets/board-batten-after.jpg";
import plumPergolaBefore from "@/assets/plum-pergola-before.jpg";
import plumPergolaAfter from "@/assets/plum-pergola-after.jpg";
import Seo from "@/components/Seo";

const projects = [
  {
    title: "Board-and-Batten Exterior Restoration",
    description: "This North Shore home had severe paint failure with bare wood showing through. We scraped, sanded, primed, and repainted the board-and-batten siding in a warm modern greige for a clean, durable, like-new finish.",
    beforeImage: boardBattenBefore,
    afterImage: boardBattenAfter,
    services: ["Exterior Painting", "Surface Prep", "Priming & Repair"],
    afterImageClass: "object-center"
  },
  {
    title: "Modern Home & Pergola Refresh",
    description: "A striking plum exterior paired with a sky-blue pergola that had badly faded and peeled. We stripped and refinished the pergola and trim to restore the home's bold, contemporary look.",
    beforeImage: plumPergolaBefore,
    afterImage: plumPergolaAfter,
    services: ["Exterior Painting", "Pergola Refinishing", "Trim Work"],
    afterImageClass: "object-center"
  },
  {
    title: "Modern Gray Ranch Transformation",
    description: "Complete exterior transformation from faded beige to stunning modern gray with Sherwin-Williams premium paint.",
    beforeImage: grayRanchBefore,
    afterImage: grayRanchAfter,
    services: ["Exterior Painting", "Surface Prep", "Color Consultation"],
    afterImageClass: "object-center"
  },
  {
    title: "Modern White Ranch Home",
    description: "Complete exterior transformation with premium Sherwin Williams paint, featuring fresh white siding and black trim accents.",
    beforeImage: whiteHouseBefore,
    afterImage: whiteHouseAfter,
    services: ["Exterior Painting", "Surface Prep", "Trim Work"],
    afterImageClass: "object-center"
  },
  {
    title: "Classic Blue Colonial",
    description: "Beautiful blue exterior with crisp white trim, showcasing the timeless appeal of quality Sherwin Williams products.",
    beforeImage: blueHouseBefore,
    afterImage: blueHouseAfter,
    services: ["Exterior Painting", "Trim Painting", "Surface Preparation"],
    afterImageClass: "object-center"
  },
  {
    title: "Warm Beige Traditional",
    description: "Elegant beige exterior painting that enhanced this home's curb appeal and protected the siding for years to come.",
    beforeImage: beigeHouseBefore,
    afterImage: beigeHouseAfter,
    services: ["Exterior Painting", "Color Consultation", "Surface Prep"],
    afterImageClass: "object-center"
  },
  {
    title: "Fresh Green Garage",
    description: "Garage transformation with durable green paint that complements the home's exterior and withstands daily use.",
    beforeImage: greenGarageBefore,
    afterImage: greenGarageAfter,
    services: ["Garage Painting", "Surface Prep", "Protective Coating"],
    afterImageClass: "object-center"
  }
];

export default function Portfolio() {
  return (
    <div>
      <Seo
        title="Painting Portfolio | North Shore Chicago Before & After | TTM Painting"
        description="Browse before-and-after photos of TTM Painting's exterior and interior work across Evanston and Chicago's North Shore. Premium Sherwin-Williams finishes, backed by a 1-3 year warranty."
      />
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Homes
              <span className="text-accent"> Across the North Shore</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              See the quality and craftsmanship that's made TTM Painting a trusted choice for homeowners across Evanston and Chicago's North Shore.
              Every project showcases our commitment to excellence with Sherwin-Williams paints.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/get-estimate">Start Your Transformation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real transformations from our recent projects, showcasing the dramatic difference professional painting makes.
            </p>
          </div>
          
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary">{service}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Before Image */}
                  <div className="order-1">
                    <div className="relative overflow-hidden rounded-lg shadow-medium">
                      <img 
                        src={project.beforeImage} 
                        alt={`${project.title} - Before`}
                        className="w-full h-[400px] object-cover object-center"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-background/80">
                          Before
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="order-2">
                    <div className="relative overflow-hidden rounded-lg shadow-medium">
                      <img 
                        src={project.afterImage} 
                        alt={`${project.title} - After`}
                        className={`w-full h-[400px] object-cover ${project.afterImageClass || 'object-center'}`}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="default" className="bg-success text-success-foreground">
                          After
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The TTM Painting Promise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A growing reputation built on quality work, premium materials, and careful attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Free</div>
              <div className="text-muted-foreground">Estimates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Sherwin Williams Paint</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1-3</div>
              <div className="text-muted-foreground">Year Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Licensed</div>
              <div className="text-muted-foreground">Bonded & Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8 italic">
              "I used TTM Painting last summer and they did amazing job on my garage. Everything turned out exactly how I wanted. The crew was on time, professional, and left everything spotless. I would definitely use them again."
            </blockquote>
            <div className="text-lg font-semibold">Satisfied Customer</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's give your home's exterior the same care and quality finish. Get started with a free estimate.
          </p>
          <Button size="lg" variant="accent" asChild>
            <Link to="/get-estimate">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}