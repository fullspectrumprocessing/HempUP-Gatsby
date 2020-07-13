//store categories fill out automatically from the Shopify storefront API (gastby-source-shopify2)

const navigationMap = {
  "/": [],
  about: [], 
  faqs: []
}

const navigationFooterLinks = {
  "Home": "/",
  "Contact Us": "/contactus",
  "About Us": "/about",
  "Store": "/store",
  "FAQs": "/faqs",
  "Privacy Policy": "/privacypolicy",
  "Terms and Conditions": "/termsandconditions",
}

export { navigationMap, navigationFooterLinks }
