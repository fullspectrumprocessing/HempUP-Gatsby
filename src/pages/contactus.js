import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledH1 = styled.h1`
    font-size: 50px;
`
class ContactUs extends React.Component {
    state = {
        user: false
    }

    render(){
        return (
            <>
            <Layout>
                <StyledH1>
                    This is the contact US page. ;-)
                </StyledH1>
            </Layout>
            </>
        )
    }
}

export default ContactUs