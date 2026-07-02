import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { reviews, googleReviewsUrl } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  if (!reviews.length) return null;

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Stars rating={5} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — here's what homeowners are saying on Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <Stars rating={review.rating} />
                  <span className="text-xs font-semibold text-muted-foreground tracking-wide">
                    via Google
                  </span>
                </div>
                <blockquote className="text-muted-foreground italic flex-grow">
                  "{review.text}"
                </blockquote>
                <div className="mt-5 pt-4 border-t">
                  <div className="font-semibold">{review.name}</div>
                  {review.date ? (
                    <div className="text-sm text-muted-foreground">{review.date}</div>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
              Read More Reviews on Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
