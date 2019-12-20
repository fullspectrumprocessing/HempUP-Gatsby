//store categories fill out automatically from the Shopify storefront API (gastby-source-shopify2)

const navigationMap = {
  "/": [],
  // store: ["pet", "isolate",  "drink", "vitamins",],
  about: [], //["who we are", "why us", "follow", "contact us"],
  // news: [],
  FAQ: []
}

const navigationFooterLinks = {
  Home: "/",
  "Contact Us": "/contactus",
  // "Sign up for our Newsletter": "/subscribe",
  "FAQ": "/FAQ",
  "About Us": "/about",
  // News: "/news",
  "Privacy Policy": "/privacypolicy",
  "Terms and Conditions": "/termsandconditions",
}

export { navigationMap, navigationFooterLinks }
