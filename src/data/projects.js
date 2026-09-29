// Each project supports optional githubUrl and liveUrl. Leave a value as ""
// and that button will not be shown.
// `categories` drives the filter buttons: Frontend, JavaScript, React, Full Stack.
// TODO: replace the placeholder GitHub URLs with your real repositories.
export const projects = [
  {
    title: "Movie Watchlist",
    description:
      "A React app for browsing movies and keeping a personal watchlist, with state managed across the whole interface.",
    features: [
      "Movie cards with genre filtering",
      "Add and remove from watchlist",
      "Duplicate prevention",
      "Loading state while data arrives",
      "Works with an API or local JSON data",
    ],
    tech: ["React", "JavaScript", "CSS"],
    categories: ["Frontend", "React"],
    githubUrl: "https://github.com/mahadevi21",
    liveUrl: "",
  },
  {
    title: "ShopNest",
    description:
      "A fashion and e-commerce storefront UI built in plain JavaScript, focused on product browsing and cart logic.",
    features: [
      "Product listing with search",
      "Category filtering",
      "Cart add, update and remove",
      "Cart saved in LocalStorage",
      "Products loaded asynchronously",
    ],
    tech: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    categories: ["Frontend", "JavaScript"],
    githubUrl: "https://github.com/mahadevi21",
    liveUrl: "",
  },
  {
    title: "JavaScript Quiz App",
    description:
      "An interactive quiz that practises core JavaScript concepts through questions, scoring and instant feedback.",
    features: [
      "Questions stored as arrays of objects",
      "DOM updates on every answer",
      "Event handling for choices and navigation",
      "Conditional logic for scoring and results",
    ],
    tech: ["JavaScript", "HTML", "CSS"],
    categories: ["JavaScript"],
    githubUrl: "https://github.com/mahadevi21",
    liveUrl: "",
  },
  {
    title: "Price and Discount Calculator",
    description:
      "A small calculator that works out the final price of an item after discount and tax, updating as you type.",
    features: [
      "Price calculation",
      "Discount logic",
      "Tax calculation",
      "Dynamic DOM updates",
    ],
    tech: ["JavaScript", "HTML", "CSS"],
    categories: ["JavaScript"],
    githubUrl: "https://github.com/mahadevi21",
    liveUrl: "",
  },
];

export const projectFilters = ["All", "Frontend", "JavaScript", "React", "Full Stack"];
