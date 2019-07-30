import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout';

const NewsTitle = styled.h1`
    font-size: 50px;
    font-family: lato, sans serif;
`
const News = () => (
    <>
        <Layout>

        <NewsTitle>
            This is The News Page
        </NewsTitle>
        </Layout>
    </>
)
export default News