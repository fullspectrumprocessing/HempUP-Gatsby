import React, { useState } from "react"
import {
  WhatIsCbd,
  WhoWeAre,
  WhyUs,
  ContactButton,
  ContactUs,
  WhatIsTitle,
  WhatIsFront,
  WhatIsTextWrap,
  WhoRow,
  WhoIsFront,
  WhatRow,
  WhyRow,
  WhyFront,
  WhoWeAreTitle,
  WhoTextWrap,
  WhyUsTitle,
  WhyTextWrap,
  ShopButton,
  Animate,
  H3,
  Wrapper,
  AnimateShop,
  WhyImgDiv,
  WhatImgDiv,
  WhoImgDiv,
} from "./about.css"
import { Link } from "gatsby"
import { useSpring } from "react-spring"
import ReactCardFlip from "react-card-flip"

const AboutUsComp = () => {
  const [state, setState] = useState({
    isFlipped1: false,
    isFlipped2: false,
    isFlipped3: false,
  })

  // on mouse hover state change
  const hover1 = () => {
    setState({
      ...state,
      isFlipped1: true,
    })
  }
  // mouse off state return to false
  const unHover1 = () => {
    setState({
      ...state,
      isFlipped1: false,
    })
  }

  // on mouse hover state change
  const hover2 = () => {
    setState({
      ...state,
      isFlipped2: true,
    })
  }
  // mouse off state return to false
  const unHover2 = () => {
    setState({
      ...state,
      isFlipped2: false,
    })
  }

  // on mouse hover state change
  const hover3 = () => {
    setState({
      ...state,
      isFlipped3: true,
    })
  }
  // mouse off state return to false
  const unHover3 = () => {
    setState({
      ...state,
      isFlipped3: false,
    })
  }
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 30,
    (x - window.innerWidth / 2) / 30,
    1.1,
  ]
  const trans = (x, y, s) =>
    `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  function Card({ children }) {
    const [props, set] = useSpring(() => ({
      xys: [0, 0, 0.75],
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
  function Card2({ children }) {
    const [props, set] = useSpring(() => ({
      xys: [0, 0, 0.75],
      config: { mass: 5, tension: 350, friction: 60 },
    }))
    return (
      <AnimateShop
        onMouseMove={({ clientX: y, clientY: x }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        {children}
      </AnimateShop>
    )
  }
  return (
    <>
      <Wrapper>
        <WhatRow>
          <WhatIsCbd
            value="isFlipped1"
            onMouseEnter={hover1}
            onMouseLeave={unHover1}
          >
            <ReactCardFlip isFlipped={state.isFlipped1}>
              <WhatIsFront key="front">
                <WhatIsTitle>What Is CBD</WhatIsTitle>
              </WhatIsFront>

              <WhatIsTextWrap key="back">
                CBD, an abbreviation for Cannabidiol, is a chemical compound
                found in cannabis plants. Most people associate cannabis with
                the effects of THC or tetrahydrocannabinol, the psychoactive
                cannabinoid that makes you high. However, CBD products
                containing less than 0.3% THC are derived from industrial
                plants, which became federally legal for cultivation by state
                authorized institutions after the 2014 Farm Bill was signed.
                These CBD products are non-psychoactive meaning they won’t get
                you high or give you the effects you’d usually get from smoking
                cannabis, but it does have various beneficial uses.
              </WhatIsTextWrap>

              {/* <WhatImgDiv>IMAGES</WhatImgDiv> */}
            </ReactCardFlip>
          </WhatIsCbd>
        </WhatRow>

        <WhoRow>
          <WhoWeAre
            value="isFlipped2"
            onMouseEnter={hover2}
            onMouseLeave={unHover2}
          >
            <ReactCardFlip isFlipped={state.isFlipped2}>
              <WhoIsFront key="front">
                <WhoWeAreTitle>Who We Are</WhoWeAreTitle>
              </WhoIsFront>
              {/* {" "} */}
              <WhoTextWrap key="back">
                Here at Hemp Up, we are dedicated to improving your physical and
                mental well-being. We’ve crafted products with your life in mind
                and we offer CBD in many forms. All our products are produced in
                clean, modern facilities, every ingredient is lab-tested, and
                our local hemp source comes from the beautiful state of
                Colorado. At Hemp Up, we manufacture CBD to enhance the wellness
                of everybody who uses our products.
              </WhoTextWrap>
            </ReactCardFlip>
          </WhoWeAre>
          {/* <WhoImgDiv>IMAGES</WhoImgDiv> */}
        </WhoRow>

        <WhyRow>
          <WhyUs
            value="isFlipped3"
            onMouseEnter={hover3}
            onMouseLeave={unHover3}
          >
            <ReactCardFlip isFlipped={state.isFlipped3}>
              <WhyFront key="front">
                <WhyUsTitle>Why Us</WhyUsTitle>
              </WhyFront>
              <WhyTextWrap key="back">
                All our products are produced in clean, modern facilities, every
                ingredient is lab-tested, and our local hemp source comes from
                the beautiful state of Colorado. At Hemp Up, we manufacture CBD
                to enhance the wellness of everybody who uses our products. You
                may have seen people use sublingual CBD Oils, also known as CBD
                tinctures or CBD hemp oil. These oils are popular because they
                are absorbed under the tongue and take effect relatively
                quickly. However, we offer a range of products designed to plug
                into any lifestyle, including CBD-infused Coffee, CBD edibles,
                and even CBD treats for your pets!
              </WhyTextWrap>
            </ReactCardFlip>
          </WhyUs>
          {/* <WhyImgDiv>IMAGES</WhyImgDiv> */}
        </WhyRow>
        <ContactUs>
          <Link to="/contactus">
            <Card2>
              <ContactButton>
                <H3>Contact Us</H3>
              </ContactButton>
            </Card2>
          </Link>
          <Link to="/store">
            <Card>
              <ShopButton>
                <H3>View Products</H3>
              </ShopButton>
            </Card>
          </Link>
        </ContactUs>
      </Wrapper>
    </>
  )
}

export default AboutUsComp
