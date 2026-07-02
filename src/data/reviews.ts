// ============================================================================
// GOOGLE REVIEWS
// ----------------------------------------------------------------------------
// TODO: Replace the PLACEHOLDER entries below with your real Google reviews.
//   - name:   the reviewer's name as shown on Google (first name + last initial
//             is fine, e.g. "Sarah K.")
//   - rating: number of stars, 1-5
//   - text:   the review text, copied from Google
//   - date:   optional, e.g. "May 2025"
//
// Also set `googleReviewsUrl` to your Google Business Profile / Maps reviews
// link so the "Read more reviews on Google" button works.
//
// Until these are replaced, the section clearly shows placeholder text so it
// is never mistaken for a real testimonial.
// ============================================================================

export interface Review {
  name: string;
  rating: number;
  text: string;
  date?: string;
}

export const googleReviewsUrl = "#"; // TODO: paste your Google reviews link

export const reviews: Review[] = [
  {
    name: "[Reviewer name]",
    rating: 5,
    text: "[Placeholder — paste a real Google review here by editing src/data/reviews.ts]",
    date: "",
  },
  {
    name: "[Reviewer name]",
    rating: 5,
    text: "[Placeholder — paste a real Google review here by editing src/data/reviews.ts]",
    date: "",
  },
  {
    name: "[Reviewer name]",
    rating: 5,
    text: "[Placeholder — paste a real Google review here by editing src/data/reviews.ts]",
    date: "",
  },
];
