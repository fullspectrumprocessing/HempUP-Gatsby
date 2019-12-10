import {createGlobalStyle} from 'styled-components'
import cssVars from './_variables'

const GlobalStyle = createGlobalStyle`
    @import url(https://use.typekit.net/fdo4rws.css);

    a {
      text-decoration: none !important;
  
    }

    a:hover{
      text-decoration: none !important;
      color: white !important;
    }

    h1 {
      margin: 0;
      font-family: ${cssVars.POSDI};
      font-weight: ${cssVars.fw_4};
      font-style: ${cssVars.fs_n};
      font-size: 95px;
      color: ${cssVars.txtBrwn};
      text-shadow: ${cssVars.h1shadow} ;
    }

    h2 {
      color: ${cssVars.txtGrn};
      font-family: ${cssVars.POSDI};
      font-style: ${cssVars.fs_i};
      font-size: 69px;
      font-weight: ${cssVars.fw_4};
      margin: 0;
    }

    h3 {
      color: white;
      font-family: ${cssVars.POSDI};
      font-size: 53px;
      font-weight: 400;
      font-style: ${cssVars.fs_n};
      margin: 0;
    }

`

export default GlobalStyle
