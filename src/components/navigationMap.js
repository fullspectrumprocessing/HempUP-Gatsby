//store categories fill out automatically from the Shopify storefront API (gastby-source-shopify2)

const navigationMap = {
  "/": [],
  // store: ["pet", "isolate",  "drink", "vitamins",],
  about: [], //["who we are", "why us", "follow", "contact us"],
  // news: [],
  FAQ: []
}

const navigationFooterLinks = {
  "Home": "/",
  "Contact Us": "/contactus",
  // "Sign up for our Newsletter": "/subscribe",
  "About Us": "/about",
  "Store": "/store",
  // News: "/news",
  "FAQs": "/FAQ",
  "Privacy Policy": "/privacypolicy",
  "Terms and Conditions": "/termsandconditions",
}

export { navigationMap, navigationFooterLinks }
