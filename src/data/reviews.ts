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
    name: "Ami Eckel",
    rating: 5,
    text: "These guys did a great job! Detailed estimates, fair pricing. The crew was timely and professional! Give them a chance you will not be disappointed!",
    date: "",
  },
  {
    name: "Frank Selmi",
    rating: 5,
    text: "This crew did a fantastic job on a 50 year old steel siding for us last year. Very professional, taped all the windows, pre washed and painted the siding and trim. We are very happy with the results and highly recommend this company.",
    date: "",
  },
  {
    name: "Jimmy",
    rating: 5,
    text: "I used TTM Painting last summer and they did amazing job on my garage. Everything turned out exactly how I wanted. The crew was on time, professional, and left everything spotless. I would definitely use them again.",
    date: "",
  },
];