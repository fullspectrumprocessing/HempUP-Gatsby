import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import ContactForm from "../components/contact/contact"

const StyledH1 = styled.h1`
  font-size: 50px;
`
class ContactUs extends React.Component {
  state = {
    user: false,
  }

  render() {
    return (
      <>
        <Layout>
          <ContactForm />
        </Layout>
      </>
    )
  }
}

export default ContactUs
