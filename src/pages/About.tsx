import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Heart } from "lucide-react";
import Seo from "@/components/Seo";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Seo
        title="About TTM Painting | Evanston & North Shore Painters"
        description="Meet the team behind TTM Painting — local, detail-driven house painters serving Evanston and Chicago's North Shore with fresh energy, premium materials, and a 1-3 year workmanship warranty."
      />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            About <span className="text-accent">TTM Painting</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Local, detail-driven painters transforming homes across Evanston and Chicago's North Shore with exceptional quality and service
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <Heart className="h-8 w-8 text-accent mr-3" />
                  <h2 className="text-3xl font-bold text-primary">Our Story</h2>
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    Hi, I'm <strong className="text-primary">Tate Downs</strong>, and this is the story of how TTM Painting came to life.
                  </p>

                  <p>
                    I got my start at a large corporate painting company, where I learned the craft from the ground up — proper surface prep, premium products, and the kind of finish work that holds up season after season. During that time, I had the chance to work alongside one of my closest friends, <strong className="text-primary">Troylee Mager</strong>, who shared the same standards and the same drive to do things the right way.
                  </p>

                  <p>
                    Together, we spent that summer doing what we love most — transforming homes in our community. Every project was a chance to prove ourselves, and we consistently delivered results that exceeded our clients' expectations. The satisfaction of seeing a homeowner's face light up when they saw their freshly painted home is what drove us every single day.
                  </p>

                  <p>
                    Before long, we realized we had something special. The trust we'd built with our clients, the quality of our work, and the passion we shared for the craft made it clear it was time to take the leap. That's when we decided to go out on our own and build TTM Painting into a company the North Shore could count on.
                  </p>

                  <p>
                    We're young, hungry, and obsessive about the details — and that's exactly what makes us different. We're not set in old habits, we bring fresh energy and modern techniques to every project, and we treat each home like it's the most important one we've ever painted. From historic homes in Evanston to lakeside properties in Winnetka and Highland Park, we show up ready to go the extra mile.
                  </p>

                  <p>
                    At TTM Painting, we're not just painting walls — we're building relationships, creating beautiful spaces, and proving that high-quality work comes from passion, dedication, and a genuine care for our North Shore neighbors.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">What Drives Us</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Homeowner Focused</h3>
                <p className="text-muted-foreground">
                  Your home is one of your most important investments. We approach every project with the same care and attention we'd want for our own homes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Quality Promise</h3>
                <p className="text-muted-foreground">
                  Every brush stroke is backed by our commitment to excellence and our 1-3 year workmanship warranty.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Fresh Energy</h3>
                <p className="text-muted-foreground">
                  Our youth brings enthusiasm, modern techniques, and a willingness to exceed expectations on every North Shore project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us prove ourselves on your next painting project. We're excited to show North Shore homeowners what our team can do.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/get-estimate">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
