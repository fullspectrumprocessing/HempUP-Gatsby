import React from "react"
import {
  WhatIsCbd,
  WhoWeAre,
  WhyUs,
  ContactButton,
  ContactUs,
  WhatIsTitle,
  WhatIsTextWrap,
  AboutRow,
  WhoWeAreTitle,
  WhoTextWrap,
  WhyUsTitle,
  WhyTextWrap,
  ShoptButton,
  Animate,
  H3,
} from "./about.css"
import { Link } from "gatsby"
import { useSpring } from "react-spring"

const AboutUsComp = () => {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 30,
    (x - window.innerWidth / 2) / 30,
    1.1,
  ]
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  function Card({ children }) {
    const [props, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: { mass: 5, tension: 350, friction: 60 },
    }))
    return (
      <Animate
        onMouseMove={({ clientX: y, clientY: x }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        {children}
      </Animate>
    )
  }
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
        <WhyUsTitle>Why Us</WhyUsTitle>
        <WhyUs>
          <WhyTextWrap>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            tempor nec feugiat nisl pretium fusce id velit. Id leo in vitae
            turpis massa sed elementum tempus egestas. Gravida in fermentum et
            sollicitudin ac orci. Cursus euismod quis viverra nibh cras
            pulvinar. In egestas erat imperdiet sed euismod nisi. tempor nec
            feugiat nisl pretium fusce id velit. Id leo in vitae turpis massa
            sed elementum tempus egestas. Gravida in fermentum et sollicitudin
            ac orci. Cursus euismod quis viverra nibh cras pulvinar. In egestas
            erat imperdiet sed euismod nisi.
          </WhyTextWrap>
        </WhyUs>
      </AboutRow>

      <ContactUs>
        <Card>
          <ContactButton>
            <Link to="/contactus">
              <H3>Contact Us Now</H3>
            </Link>
          </ContactButton>
        </Card>
        <ShoptButton>
          <Link to="/shop">View Our Products</Link>
        </ShoptButton>
      </ContactUs>
    </>
  )
}

export default AboutUsComp
