import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import ContactForm from "./contact-form"
import ContactImage from "./contact-image"

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  justify-content: space-between;
`
const StyledImage = styled(Img)`
  height: 95%;
  width: 90%;
`

const Contact = props => {
  console.log(props)
  return (
    <StyledWrapper>
      <ContactImage />
      <ContactForm />
    </StyledWrapper>
  )
}

export default Contact

export const query = graphql`
  query {
    image: file(relativePath: { eq: "jpg/wspolpraca.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
