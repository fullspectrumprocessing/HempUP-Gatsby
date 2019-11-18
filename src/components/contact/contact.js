import React, { useReducer } from "react"
import styled from "styled-components"
import { navigate } from "gatsby-link"
import GlobalStyle from "../../theme/globalStyle"
import cssVars from "../../theme/_variables.js"

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FORM = styled.form`
width: 60%;
padding: 20px
margin: 30px 20px;
`
const StyledInput = styled.input`
  padding: 5px 10px;
`
const StyledTextArea = styled.textarea`
  padding: 5px 10px;
`
const StyledButton = styled.button`
  width: 100px;
  padding: 20px;
  background-color: ${cssVars.btnGrdntLghtGreen};
`
const ContactForm = () => {
  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    }
  )
  function encode(data) {
    return Object.keys(data).map(
      key =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key]).join("&")
    )
  }
  function submission(e) {
    e.preventDefault()
    // console.log(state, "this is state").navigate("/thankyou")
    if (state) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...state,
        }),
      })
        .then(() => navigate("/thankyou"))
        .catch(error => alert(error))
    }
  }
  const { firstName, lastName, email, phoneNumber, subject, message } = state
  return (
    <>
      <GlobalStyle />
      <FormWrap>
        <FORM
          onSubmit={submission}
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          method="post"
        >
          {/* Netlify Configuration form hidden inputs */}
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <StyledInput
            type="text"
            name="First Name"
            onChange={e => updateState({ firstName: e.target.value })}
            value={firstName}
            placeholder="First Name"
          />
          <StyledInput
            type="text"
            name="Last Name"
            onChange={e => updateState({ lastName: e.target.value })}
            value={lastName}
            placeholder="Last Name"
          />
          <StyledInput
            type="text"
            name="Email"
            onChange={e => updateState({ email: e.target.value })}
            value={email}
            placeholder="Email"
          />
          <StyledInput
            type="text"
            name="Phone Number"
            onChange={e => updateState({ phoneNumber: e.target.value })}
            value={phoneNumber}
            placeholder="Contact Number"
          />
          <StyledInput
            type="text"
            name="Subject"
            onChange={e => updateState({ subject: e.target.value })}
            value={subject}
            placeholder="Message Subject"
          />

          <StyledTextArea
            type="text"
            name="Message"
            onChange={e => updateState({ subject: e.target.value })}
            value={message}
            placeholder="Your Message"
          />
          <StyledButton type="submit" />
        </FORM>
      </FormWrap>
    </>
  )
}
export default ContactForm
