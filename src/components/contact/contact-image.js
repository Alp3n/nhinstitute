import React from "react"
import styled from "styled-components"
// import myTheme from "../../styles/myTheme"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  height: 100%;
  width: 85%;
`

const ContactImage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "jpg/wspolpraca.jpg" }) {
        childImageSharp {
          fluid(quality: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <StyledImage fluid={data.file.childImageSharp.fluid} />
}

export default ContactImage
