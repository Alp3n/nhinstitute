import React, { useState } from "react"
import styled from "styled-components"

import AboutPerson from "./about-person"

import { graphql, useStaticQuery } from "gatsby"
import AboutPersonMore from "./about-person-more"

const StyledPersonGallery = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
`

const StyledPersonWrapper = styled.div``

const AboutPersonGallery = ({ people, more }) => {
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [selectedImg, setSelectedImg] = useState(null)

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
  const handlePerson = (person, img) => {
    setSelectedPerson(person)
    setSelectedImg(img)
  }
  return (
    <div>
      {selectedPerson === null ? (
        <StyledPersonGallery>
          <AboutPerson
            person={people.rokicki}
            img={data.rokicki.childImageSharp.fluid}
            handlePerson={handlePerson}
            selectedPerson={selectedPerson}
            more={more}
          />
          <AboutPerson
            person={people.grodzicka}
            img={data.grodzicka.childImageSharp.fluid}
            handlePerson={handlePerson}
            selectedPerson={selectedPerson}
            more={more}
          />
          <AboutPerson
            person={people.wolski}
            img={data.wolski.childImageSharp.fluid}
            handlePerson={handlePerson}
            selectedPerson={selectedPerson}
            more={more}
          />
        </StyledPersonGallery>
      ) : (
        <StyledPersonWrapper>
          <AboutPersonMore
            selectedImg={selectedImg}
            selectedPerson={selectedPerson}
            handlePerson={handlePerson}
          />
        </StyledPersonWrapper>
      )}
    </div>
  )
}

export default AboutPersonGallery
