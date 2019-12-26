
import { navigate } from "gatsby-link"
// import GlobalStyle from "../../theme/globalStyle"
// import cssVars from "../../theme/_variables.js"
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
// import ContactBG from "./ContactBG"
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
    (contact, newcontact) => ({ ...contact, ...newcontact}),
    { name: "", email: "", phone: "", message: "" }
  )
  const { name, email, phone, message } = contact

  // submit function that sends data to Netlify
  function submission(e) {
    e.preventDefault()
    if (contact) {
      console.log(contact, "this is state")
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
        {/* <h2>Contact Us</h2> */}
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
              {/* <StyledLabel>Name*</StyledLabel> */}
              <FormInput
                name="name"
                type="text"
                placeholder="Name*"
                value={name}
                // value={props.firstName}
                // id="name"
                onChange={e => updateContact({ name: e.target.value })}
              />

              {/* <StyledLabel>Email*</StyledLabel> */}
              <FormInput
                onChange={e => updateContact({ email: e.target.value })}
                name="email"
                type="email"
                placeholder="Email*"
                value={email}
                // id="email"
              />

              {/* <StyledLabel>Phone*</StyledLabel> */}
              <FormInput
                // id="phone"
                onChange={e => updateContact({ phone: e.target.value })}
                name="phone"
                type="tel"
                placeholder="Phone*"
                value={phone}
              />

            

              {/* <StyledLabel>Message*</StyledLabel> */}
              <FormTextArea
                onChange={e => updateContact({ message: e.target.value })}
                // id="message"
                name="message"
                placeholder="Message*"
                value={message}
                type="text"
              />
              <StyledButton type="submit">Submit</StyledButton>
            </Bounce>
          </ApplyWrapper>

          {/* <AdressWrapper>
            <Bounce bottom duration={1500}>
              <A
                href="https://www.google.com/maps/place/85+Broad+St,+New+York,+NY+10004/@40.7040662,-74.0133343,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a141703be89:0x74c637bf3f5d8f7d!8m2!3d40.7040662!4d-74.0111456"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TextWrap>
                  <H2>
                  85 Broad Street <br/> 
                  NY, NY 10004<br/> 
                  (347)465-4703 
                  </H2>
                  <P1>VIEW ON MAP</P1>
                </TextWrap>
              </A>
            </Bounce>
          </AdressWrapper> */}
        </RowWrap>
      </Container>
    </>
  )
}

export default Contact


// const FormWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
// const FORM = styled.form`
// width: 60%;
// padding: 20px
// margin: 30px 20px;
// `
// const StyledInput = styled.input`
//   padding: 5px 10px;
// `
// const StyledTextArea = styled.textarea`
//   padding: 5px 10px;
// `
// const StyledButton = styled.button`
//   width: 100px;
//   padding: 20px;
//   background-color: ${cssVars.btnGrdntLghtGreen};
// `
// const ContactForm = () => {
//   const [state, updateState] = useReducer(
//     (state, newState) => ({ ...state, ...newState }),
//     {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phoneNumber: "",
//       subject: "",
//       message: "",
//     }
//   )
//   function encode(data) {
//     return Object.keys(data).map(
//       key =>
//         encodeURIComponent(key) + "=" + encodeURIComponent(data[key]).join("&")
//     )
//   }
//   function submission(e) {
//     e.preventDefault()
//     // console.log(state, "this is state").navigate("/thankyou")
//     if (state) {
//       fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: encode({
//           "form-name": "contact",
//           ...state,
//         }),
//       })
//         .then(() => navigate("/thankyou"))
//         .catch(error => alert(error))
//     }
//   }
//   const { firstName, lastName, email, phoneNumber, subject, message } = state
//   return (
//     <>
//       <GlobalStyle />
//       <FormWrap>
//         <FORM
//           onSubmit={submission}
//           data-netlify-honeypot="bot-field"
//           data-netlify="true"
//           name="contact"
//           method="post"
//         >
//           {/* Netlify Configuration form hidden inputs */}
//           <input type="hidden" name="bot-field" />
//           <input type="hidden" name="form-name" value="contact" />

//           <StyledInput
//             type="text"
//             name="First Name"
//             onChange={e => updateState({ firstName: e.target.value })}
//             value={firstName}
//             placeholder="First Name"
//           />
//           <StyledInput
//             type="text"
//             name="Last Name"
//             onChange={e => updateState({ lastName: e.target.value })}
//             value={lastName}
//             placeholder="Last Name"
//           />
//           <StyledInput
//             type="text"
//             name="Email"
//             onChange={e => updateState({ email: e.target.value })}
//             value={email}
//             placeholder="Email"
//           />
//           <StyledInput
//             type="text"
//             name="Phone Number"
//             onChange={e => updateState({ phoneNumber: e.target.value })}
//             value={phoneNumber}
//             placeholder="Contact Number"
//           />
//           <StyledInput
//             type="text"
//             name="Subject"
//             onChange={e => updateState({ subject: e.target.value })}
//             value={subject}
//             placeholder="Message Subject"
//           />

//           <StyledTextArea
//             type="text"
//             name="Message"
//             onChange={e => updateState({ subject: e.target.value })}
//             value={message}
//             placeholder="Your Message"
//           />
//           <StyledButton type="submit" />
//         </FORM>
//       </FormWrap>
//     </>
//   )
// }
// export default ContactForm
