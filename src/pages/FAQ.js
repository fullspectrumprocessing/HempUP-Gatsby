import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import FAQ from '../components/faq/FAQ'

const WhatIsTitle = styled.h1`
font-size: 50px;
`

const FAQPage = () => (

    <>
    <Layout>
        <FAQ>
            FAQ
        </FAQ>
    </Layout>
    </>
)

export default FAQPage