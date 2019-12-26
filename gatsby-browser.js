/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// import React from "react"
// import GlobalContextProvider from "./src/context/globalcontext"


// export const wrapRootElement = ({ element }) => {
//   return <GlobalContextProvider>{element}</GlobalContextProvider>
// }

import React from 'react';
import ContextProvider from "./src/provider/ContextProvider";

// root wrapper to help make global context work between site page changes
export const wrapRootElement = ({ element }) => {
    return <ContextProvider>{element}</ContextProvider>;
  }
  