import React from "react"
import {
  WhatIsCbd,
  WhoWeAre,
  WhyUs,
  ContactButton,
  WhatIsTitle,
  WhatIsTextWrap,
  AboutRow,
  WhoWeAreTitle,
  WhoTextWrap,
} from "./about.css"

const AboutUsComp = () => {
  return (
    <>
      <AboutRow>
        <WhatIsTitle>What Is CBD</WhatIsTitle>
        <WhatIsCbd>
          <WhatIsTextWrap>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem
            integer vitae justo eget magna fermentum iaculis. Mattis ullamcorper
            velit sed ullamcorper morbi tincidunt ornare. Amet consectetur
            adipiscing elit pellentesque habitant morbi tristique senectus et.
            Turpis egestas maecenas pharetra convallis posuere morbi leo. Odio
            ut enim blandit volutpat maecenas volutpat blandit aliquam etiam.
            Donec et odio pellentesque diam volutpat commodo sed. Non curabitur
            gravida arcu ac tortor dignissim convallis. Ultricies mi quis
            hendrerit dolor magna eget est lorem ipsum. Urna id volutpat lacus
            laoreet non. Habitasse platea dictumst vestibulum rhoncus est.
            Pellentesque massa placerat duis ultricies lacus sed. Consectetur a
            erat nam at lectus urna. Orci dapibus ultrices in iaculis nunc sed
            augue lacus viverra. Nulla facilisi cras fermentum odio eu. Sed sed
            risus pretium quam vulputate dignissim suspendisse. Nulla facilisi
            etiam dignissim diam quis enim lobortis scelerisque. Lorem donec
            massa sapien faucibus et molestie ac feugiat sed. Viverra nibh cras
            pulvinar mattis nunc sed blandit libero. Lacus laoreet non curabitur
            gravida arcu ac tortor dignissim convallis. Enim facilisis gravida
            neque convallis a cras semper. Cursus turpis massa tincidunt dui ut
            ornare. et.
          </WhatIsTextWrap>
        </WhatIsCbd>
      </AboutRow>

      <AboutRow>
        <WhoWeAreTitle>Who We Are</WhoWeAreTitle>
        <WhoWeAre>
          {" "}
          <WhoTextWrap>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac
            auctor augue mauris. Lectus magna fringilla urna porttitor rhoncus
            dolor purus non. Sit amet nisl purus in. Euismod elementum nisi quis
            eleifend quam adipiscing vitae proin sagittis. Feugiat in fermentum
            posuere urna nec tincidunt. Amet mauris commodo quis imperdiet. At
            imperdiet dui accumsan sit amet nulla facilisi. Morbi tincidunt
            augue interdum velit euismod.
          </WhoTextWrap>
        </WhoWeAre>
      </AboutRow>

      <AboutRow>
        <WhyUs>Why Us</WhyUs>
      </AboutRow>
      <ContactButton>Contact Us Button</ContactButton>
    </>
  )
}

export default AboutUsComp
