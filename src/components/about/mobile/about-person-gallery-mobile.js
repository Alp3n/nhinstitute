import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import AboutPersonMobile from "./about-person-mobile"

const StyledPersonGallery = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 1200px) {
    grid-template-columns: auto;
  }
`

const AboutPersonGalleryMobile = ({ people }) => {
  const [selectedPersonRokicki, setSelectedPersonRokicki] = useState(null)
  const [selectedPersonGrodzicka, setSelectedPersonGrodzicka] = useState(null)
  const [selectedPersonWolski, setSelectedPersonWolski] = useState(null)

  const data = useStaticQuery(graphql`
    query ImagesMobile {
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
  const handleRokicki = person => {
    setSelectedPersonRokicki(person)
  }
  const handleGrodzicka = person => {
    setSelectedPersonGrodzicka(person)
  }
  const handleWolski = person => {
    setSelectedPersonWolski(person)
  }

  return (
    <div>
      <StyledPersonGallery>
        <AboutPersonMobile
          person={people.rokicki}
          img={data.rokicki.childImageSharp.fluid}
          handlePerson={handleRokicki}
          selectedPerson={selectedPersonRokicki}
        />
        <AboutPersonMobile
          person={people.grodzicka}
          img={data.grodzicka.childImageSharp.fluid}
          handlePerson={handleGrodzicka}
          selectedPerson={selectedPersonGrodzicka}
        />
        <AboutPersonMobile
          person={people.wolski}
          img={data.wolski.childImageSharp.fluid}
          handlePerson={handleWolski}
          selectedPerson={selectedPersonWolski}
        />
      </StyledPersonGallery>
    </div>
  )
}

export default AboutPersonGalleryMobile
