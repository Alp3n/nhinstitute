import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import AboutPersonMore from "./about-person-more"
// import Button from "../../button/button"

const StyledPersonGallery = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutPersonGallery = ({ people, setIsMore }) => {
  const data = useStaticQuery(graphql`
    query Images {
      rokicki: file(relativePath: { eq: "portrait/p1rokicki.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grodzicka: file(relativePath: { eq: "portrait/p2grodzicka.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wolski: file(relativePath: { eq: "portrait/p3wolski.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledPersonGallery>
      <AboutPersonMore
        person={people.wolski}
        img={data.wolski.childImageSharp.fluid}
      />
      <AboutPersonMore
        person={people.grodzicka}
        img={data.grodzicka.childImageSharp.fluid}
      />
      <AboutPersonMore
        person={people.rokicki}
        img={data.rokicki.childImageSharp.fluid}
      />
    </StyledPersonGallery>
  )
}

export default AboutPersonGallery
