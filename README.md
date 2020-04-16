# TO-DOs

### Errors **(check dev tools console)**

- Typekit Error:

  ```
  GET https://use.typekit.net/fdo4rws.css net::ERR_FAILED
  Failed to decode downloaded font: https://use.typekit.net/fdo4rws.css
  ```

- index.js:2177 Warning: Each child in a list should have a unique "key" prop.

  ```
  Check the render method of `Footer`. See https://fb.me/react-warning-keys for more  information.
      in footercss__LI (at footer/index.js:84)
      in Footer (at layout.js:66)
      in  Layout (at productpage.js:90)
      in ProductPage (created by HotExportedProductPage)
      in AppContainer (created by HotExportedProductPage)
      in HotExportedProductPage (created by PageRenderer)
      in PageRenderer (at query-result-store.js:86)
      in PageQueryStore (at root.js:56)
      in RouteHandler (at root.js:78)
      in div (created by FocusHandlerImpl)
      in FocusHandlerImpl (created by Context.Consumer)
      in FocusHandler (created by RouterImpl)
      in RouterImpl (created by Context.Consumer)
      in Location (created by Context.Consumer)
      in Router (created by EnsureResources)
      in ScrollContext (at root.js:69)
      in RouteUpdates (at root.js:68)
      in EnsureResources (at root.js:66)
      in LocationHandler (at root.js:124)
      in LocationProvider (created by Context.Consumer)
      in Location (at root.js:123)
      in Root (at root.js:131)
      in ContextProvider (at gatsby-browser.js:19)
      in StaticQueryStore (at root.js:138)
      in _default (at app.js:67)
  ```

### Cart edits

- <strong>Input change function on cart page working (change quantity on cart page) with updating total price correctly. (started working on this, not functioning correctly, commented out code)</strong>
- Text Shadows on FAqs page
- Animations
- Mobile Responsiveness (Product description page, not sized for smaller screens to acoutn for the new product information coming from shopify )<strong>Format description coming in from Shopify (paragraph spaces, list bullet points). Troubleshoot html format not coming in. </strong>
- ABOUT PAGE STYLING (Make Sections FLipCards with Title on front of card and text on the back) (Kathleen)
- Add images to the about page
- Better Styling
- <strong>Pages and Routes</strong> -->
  - 404 page <em>Make the 404 page pretty unique; look for examples</em>
- Age Restriction Modal
- Social Media Accts (Kathleen said she was contacting Grace and Lucia about Socail Media)
  - Instagram ??
  - Facebook ??
  - Twitter ??
  - Youtube ??
  - Pinterest ??

## Future Implementaion

- News API Research (Kathleen)
- Reviews/Comments API (Kathleen)
- Social Media Links and SM acct creation (Kathleen)
- Facebook API Implementation
- Get internal IP Address from HempUp team in Colorado (Avery)
- Customer incentive <em>"Free Shipping on orders over \$100</em>
- Shopping Cart
  - Create LogIn capabilities (Shopify, Google, or Netlify)

### Things To Think About

- Should we display the stock quantity for the products
