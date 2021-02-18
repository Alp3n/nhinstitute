import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  min-width: ${props => props.width};
  height: auto;
`

const ImageLogo = props => {
  const data = useStaticQuery(graphql`
    query {
      imageLogoSmall: file(name: { eq: "nhi" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.imageLogoSmall?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <StyledImg fluid={data.imageLogoSmall.childImageSharp.fluid} {...props} />
  )
}

export default ImageLogo
