import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  width: ${props => props.width};
  /* height: auto; */
`

const LogoNhi = props => {
  const data = useStaticQuery(graphql`
    query {
      nhi: file(name: { eq: "nhi" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Link to="/">
      <StyledImg fluid={data.nhi.childImageSharp.fluid} {...props} />
    </Link>
  )
}

export default LogoNhi
