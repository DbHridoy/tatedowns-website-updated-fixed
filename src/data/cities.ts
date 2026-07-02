export interface City {
  slug: string;
  name: string;
  title: string;
  description: string;
  tagline: string;
  intro: string[];
  localContext: string;
  highlights: string[];
  nearby: string[];
  geo: { lat: string; lng: string };
}

export const cities: City[] = [
  {
    slug: "evanston",
    name: "Evanston",
    title: "House Painters in Evanston, IL | TTM Painting",
    description:
      "Trusted Evanston house painters. Interior & exterior painting for historic, lakefront, and bungalow homes. Licensed, insured, 1-3 year warranty. Free estimates.",
    tagline: "Our home base on the North Shore",
    intro: [
      "Evanston is where TTM Painting calls home, and it's a city we know inside and out. From the historic Victorians and stately Four Squares near the lakefront to the brick two-flats and bungalows further west, Evanston's housing stock is as varied as its neighborhoods. That variety is exactly why careful prep and the right products matter so much here.",
      "Whether you own a century-old home near Northwestern that needs delicate trim and woodwork restored, or a mid-century house that's due for a fresh exterior, we tailor every job to the home in front of us — never a one-size-fits-all approach.",
    ],
    localContext:
      "Many Evanston homes feature original wood siding, ornate trim, and decades of paint layers that demand thorough scraping, sanding, and priming before a finish coat ever goes on. Lake-effect humidity and harsh winters also put exterior paint to the test, which is why we use premium Sherwin-Williams products built to hold up season after season.",
    highlights: [
      "Experience with historic and landmark-district homes",
      "Careful restoration of original wood trim and siding",
      "Lakefront-ready exterior systems that resist moisture and fading",
      "Clean, respectful work in dense, close-set neighborhoods",
    ],
    nearby: ["skokie", "wilmette", "kenilworth"],
    geo: { lat: "42.0451", lng: "-87.6877" },
  },
  {
    slug: "skokie",
    name: "Skokie",
    title: "House Painters in Skokie, IL | TTM Painting",
    description:
      "Skokie house painters specializing in bungalow and ranch exteriors plus bright interior updates. Licensed, insured, premium Sherwin-Williams finishes. Free estimates.",
    tagline: "Just west of our Evanston home base",
    intro: [
      "Just west of our Evanston home base, Skokie is one of the most diverse and welcoming communities on the North Shore — and one we're proud to serve. The village is known for its tidy brick bungalows, classic ranches, and mid-century homes, many built in the postwar boom and now ready for a refresh.",
      "TTM Painting helps Skokie homeowners modernize dated exteriors and brighten interiors without losing the character that makes these solid, well-built homes so appealing.",
    ],
    localContext:
      "Skokie's brick-and-frame homes often have painted trim, soffits, fascia, and garages that take the brunt of Chicago weather. We focus on proper surface prep and durable finishes so your fresh paint looks great for years, not just one season.",
    highlights: [
      "Refreshing classic bungalow and ranch exteriors",
      "Crisp trim, soffit, fascia, and garage painting",
      "Bright, modern interior updates",
      "Fast, local response from nearby Evanston",
    ],
    nearby: ["evanston", "wilmette", "glenview"],
    geo: { lat: "42.0324", lng: "-87.7416" },
  },
  {
    slug: "wilmette",
    name: "Wilmette",
    title: "House Painters in Wilmette, IL | TTM Painting",
    description:
      "Wilmette house painters for Tudor, Georgian, and colonial homes. Detail-driven interior & exterior painting with a 1-3 year warranty. Free estimates.",
    tagline: "Timeless architecture, careful detail",
    intro: [
      "Wilmette blends established, tree-lined neighborhoods with timeless architecture — brick Georgians, Tudors, and classic colonials that reward a careful, detail-driven painter. TTM Painting helps Wilmette homeowners protect and elevate these homes with finishes that respect their character.",
      "From a full exterior repaint to refreshing interior living spaces, we treat every Wilmette home with the care it deserves.",
    ],
    localContext:
      "Mature trees and lakefront humidity mean Wilmette exteriors face moisture, shade, and seasonal swings. We prep thoroughly and use premium Sherwin-Williams coatings engineered to resist peeling, mildew, and fading.",
    highlights: [
      "Detail work on Tudor, Georgian, and colonial features",
      "Moisture- and mildew-resistant exterior systems",
      "Interior repaints that match established homes",
      "Respectful of mature landscaping during prep",
    ],
    nearby: ["evanston", "kenilworth", "winnetka"],
    geo: { lat: "42.0723", lng: "-87.7228" },
  },
  {
    slug: "kenilworth",
    name: "Kenilworth",
    title: "House Painters in Kenilworth, IL | TTM Painting",
    description:
      "Kenilworth house painters delivering high-end finishes for distinctive, architect-designed homes. Discreet, meticulous, premium materials. Free estimates.",
    tagline: "A higher bar for finish quality",
    intro: [
      "Kenilworth is one of the smallest and most distinctive villages on the North Shore, known for its large, architect-designed homes and meticulously maintained streetscapes. Painting in Kenilworth means meeting a high bar — and that's exactly the standard TTM Painting brings to every project.",
      "We understand that in a community like this, the finish, the lines, and the cleanliness of the work all matter.",
    ],
    localContext:
      "Many Kenilworth homes feature extensive trim, custom millwork, and large exterior elevations that demand experienced prep and a steady hand. We take the time to do it right, with premium materials and a finish built to last.",
    highlights: [
      "High-end finish quality for distinctive homes",
      "Careful handling of custom millwork and trim",
      "Discreet, respectful, tidy job sites",
      "Premium Sherwin-Williams coatings throughout",
    ],
    nearby: ["wilmette", "winnetka", "evanston"],
    geo: { lat: "42.0859", lng: "-87.7187" },
  },
  {
    slug: "winnetka",
    name: "Winnetka",
    title: "House Painters in Winnetka, IL | TTM Painting",
    description:
      "Winnetka house painters for grand historic and prairie-style homes. Meticulous prep, premium finishes, color consultation. Licensed & insured. Free estimates.",
    tagline: "Craftsmanship that shows",
    intro: [
      "Winnetka's grand historic homes, prairie-style architecture, and wooded lots make it one of the North Shore's most beautiful communities — and one where craftsmanship really shows. TTM Painting helps Winnetka homeowners preserve and enhance these homes inside and out.",
      "From sprawling exteriors to refined interior spaces, we bring patience, prep, and premium products to every Winnetka project.",
    ],
    localContext:
      "Large elevations, intricate trim, and tree-shaded exteriors are common in Winnetka, all of which call for thorough surface prep and coatings that stand up to moisture and shade. We never cut corners on the steps that make a paint job last.",
    highlights: [
      "Experience with large, architecturally significant homes",
      "Meticulous trim and woodwork detailing",
      "Shade- and moisture-ready exterior systems",
      "Color consultation to complement classic architecture",
    ],
    nearby: ["glencoe", "kenilworth", "highland-park"],
    geo: { lat: "42.1081", lng: "-87.7359" },
  },
  {
    slug: "glencoe",
    name: "Glencoe",
    title: "House Painters in Glencoe, IL | TTM Painting",
    description:
      "Glencoe house painters for custom and contemporary homes on wooded lots. Mildew-resistant, color-stable exterior systems. Free estimates.",
    tagline: "Built for wooded, private lots",
    intro: [
      "Glencoe pairs wooded, private lots with custom homes and a strong sense of design — the kind of setting where a quality paint job makes a real difference. TTM Painting serves Glencoe homeowners with exterior and interior work tuned to each home's style.",
      "Whether you're updating a custom contemporary or refreshing a classic, we deliver clean lines and lasting results.",
    ],
    localContext:
      "Heavily wooded lots mean shade, moisture, and leaf debris that can be tough on exterior paint. We prep carefully and choose Sherwin-Williams products formulated to resist mildew and hold their color in filtered light.",
    highlights: [
      "Exterior work suited to wooded, shaded lots",
      "Mildew-resistant, color-stable finishes",
      "Custom and contemporary home experience",
      "Thorough prep for long-lasting results",
    ],
    nearby: ["winnetka", "highland-park", "northbrook"],
    geo: { lat: "42.1350", lng: "-87.7581" },
  },
  {
    slug: "highland-park",
    name: "Highland Park",
    title: "House Painters in Highland Park, IL | TTM Painting",
    description:
      "Highland Park house painters experienced with ravine lots and modern, mid-century, and historic homes. Moisture-resistant finishes. Free estimates.",
    tagline: "Ravines, trees, and a character all its own",
    intro: [
      "Highland Park's signature ravines, mature trees, and mix of historic, mid-century, and modern homes give it a character all its own. TTM Painting helps Highland Park homeowners protect and beautify these homes with finishes built for the local landscape.",
      "From a modern exterior with clean lines to a classic interior refresh, we tailor our approach to your home.",
    ],
    localContext:
      "Ravine lots and dense tree cover create damp, shaded conditions that can shorten the life of a cheap paint job. We focus on surface prep and premium coatings that resist moisture, mildew, and fading in these settings.",
    highlights: [
      "Built for ravine and heavily-shaded properties",
      "Modern and mid-century home experience",
      "Moisture- and mildew-resistant systems",
      "Crisp, contemporary finishes",
    ],
    nearby: ["glencoe", "lake-forest", "northbrook"],
    geo: { lat: "42.1817", lng: "-87.8003" },
  },
  {
    slug: "lake-forest",
    name: "Lake Forest",
    title: "House Painters in Lake Forest, IL | TTM Painting",
    description:
      "Lake Forest house painters for estates, historic homes, and large wooded properties. Meticulous prep, premium Sherwin-Williams finishes. Free estimates.",
    tagline: "Estates, history, and detail-first work",
    intro: [
      "Lake Forest is defined by its estates, historic homes, and large wooded properties — projects that reward experience, patience, and premium materials. TTM Painting brings a careful, detail-first approach to every Lake Forest home.",
      "From extensive exteriors to elegant interiors, we deliver the kind of finish these homes deserve.",
    ],
    localContext:
      "Large elevations, historic woodwork, and mature, shaded grounds are common in Lake Forest. Each calls for meticulous prep and durable, high-quality coatings — the steps that separate a paint job that lasts from one that doesn't.",
    highlights: [
      "Experience with estate and historic homes",
      "Meticulous restoration of historic woodwork",
      "Durable exterior systems for large elevations",
      "Premium Sherwin-Williams finishes",
    ],
    nearby: ["highland-park", "glencoe", "northbrook"],
    geo: { lat: "42.2586", lng: "-87.8409" },
  },
  {
    slug: "glenview",
    name: "Glenview",
    title: "House Painters in Glenview, IL | TTM Painting",
    description:
      "Glenview house painters serving established neighborhoods and newer homes alike, including The Glen. Interior & exterior painting. Free estimates.",
    tagline: "Established neighborhoods and newer homes alike",
    intro: [
      "Glenview offers a great mix of established neighborhoods and newer construction, from classic colonials and ranches to the modern homes of The Glen. TTM Painting serves Glenview homeowners across all of it, with exterior and interior work tailored to each home.",
      "Whether your home is decades old or relatively new, we help it look its best and stay protected.",
    ],
    localContext:
      "Glenview's range of homes means a range of needs — from refreshing weathered older exteriors to keeping newer homes looking sharp. We match the prep and products to your specific home and its exposure.",
    highlights: [
      "Serving both established and newer neighborhoods",
      "Exterior and interior painting for every home style",
      "Durable finishes matched to your home's exposure",
      "Local, responsive service",
    ],
    nearby: ["northbrook", "skokie", "wilmette"],
    geo: { lat: "42.0698", lng: "-87.7878" },
  },
  {
    slug: "northbrook",
    name: "Northbrook",
    title: "House Painters in Northbrook, IL | TTM Painting",
    description:
      "Northbrook house painters refreshing ranch and colonial homes inside and out. Durable trim, siding, and garage finishes. Licensed & insured. Free estimates.",
    tagline: "A fresh, well-done finish goes a long way",
    intro: [
      "Northbrook's established neighborhoods, comfortable ranches, and classic colonials make it a community where a fresh, well-done paint job goes a long way. TTM Painting helps Northbrook homeowners refresh and protect their homes inside and out.",
      "We bring careful prep, premium products, and clean, dependable workmanship to every Northbrook project.",
    ],
    localContext:
      "Many Northbrook homes have painted trim, siding, and garages that face years of Chicago-area weather. Proper prep and durable Sherwin-Williams coatings keep them looking great far longer than a quick, cut-rate repaint.",
    highlights: [
      "Refreshing established ranch and colonial homes",
      "Durable trim, siding, and garage finishes",
      "Bright, clean interior updates",
      "Reliable, local service",
    ],
    nearby: ["glenview", "highland-park", "glencoe"],
    geo: { lat: "42.1275", lng: "-87.8290" },
  },
];

export const citySlugs = cities.map((c) => c.slug);

export function getCity(slug?: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
