import { navigate } from "gatsby-link"
import React, { useReducer } from "react"
import {
  FormInput,
  FormTextArea,
  ApplyWrapper,
  H1,
  StyledButton,
  Container,
  RowWrap,
} from "./contact.css"
import Bounce from "react-reveal/Bounce"

const Contact = props => {
  // function that maps through the data that will be sent through netlify
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  // setting inital state to empty strings
  const [contact, updateContact] = useReducer(
    (contact, newcontact) => ({ ...contact, ...newcontact }),
    { name: "", email: "", phone: "", message: "" }
  )
  const { name, email, phone, message } = contact

  // submit function that sends data to Netlify
  function submission(e) {
    e.preventDefault()
    if (contact) {
      //if state is populated send data to netlefy
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...contact,
        }),
      })
        // then go to thank you page
        .then(() => navigate("/thankyou"))
        .catch(error => alert(error))
    }
  }

  return (
    <>
      <Container>
        <RowWrap>
          <ApplyWrapper
            onSubmit={submission}
            className="form"
            data-netlify-honeypot="bot-field"
            method="post"
            action="/"
            data-netlify="true"
            name="contact"
          >
            <H1>Contact Us</H1>
            <Bounce bottom duration={1500}>
              {/* netlify form configuration hidden inputs */}
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <FormInput
                name="name"
                type="text"
                placeholder="Name*"
                value={name}
                onChange={e => updateContact({ name: e.target.value })}
              />

              <FormInput
                onChange={e => updateContact({ email: e.target.value })}
                name="email"
                type="email"
                placeholder="Email*"
                value={email}
              />

              <FormInput
                onChange={e => updateContact({ phone: e.target.value })}
                name="phone"
                type="tel"
                placeholder="Phone*"
                value={phone}
              />

              <FormTextArea
                onChange={e => updateContact({ message: e.target.value })}
                name="message"
                placeholder="Message*"
                value={message}
                type="text"
              />
              <StyledButton type="submit">Submit</StyledButton>
            </Bounce>
          </ApplyWrapper>
        </RowWrap>
      </Container>
    </>
  )
}

export default Contact
