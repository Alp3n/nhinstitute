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

const AboutPersonGalleryMobile = ({ isEn }) => {
  const [selectedPersonRokicki, setSelectedPersonRokicki] = useState(null)
  const [selectedPersonGrodzicka, setSelectedPersonGrodzicka] = useState(null)
  const [selectedPersonWolski, setSelectedPersonWolski] = useState(null)

  const data = useStaticQuery(graphql`
    {
      rokicki: mdx(frontmatter: { slug: { eq: "people/rokicki" } }) {
        id
        frontmatter {
          myid
          name
          slug
          texts
          title
          titles
          textsEN
          titlesEN
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      grodzicka: mdx(frontmatter: { slug: { eq: "people/grodzicka" } }) {
        id
        frontmatter {
          myid
          name
          slug
          texts
          textsEN
          title
          titles
          titlesEN
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      wolski: mdx(frontmatter: { slug: { eq: "people/wolski" } }) {
        id
        frontmatter {
          myid
          name
          slug
          texts
          title
          titles
          textsEN
          titlesEN
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <StyledPersonGallery>
        <AboutPersonMobile
          key={data.rokicki.myId}
          person={data.rokicki}
          setSelectedPerson={setSelectedPersonRokicki}
          selectedPerson={selectedPersonRokicki}
          isEn={isEn}
        />
        <AboutPersonMobile
          key={data.grodzicka.myId}
          person={data.grodzicka}
          setSelectedPerson={setSelectedPersonGrodzicka}
          selectedPerson={selectedPersonGrodzicka}
          isEn={isEn}
        />
        <AboutPersonMobile
          key={data.wolski.myId}
          person={data.wolski}
          setSelectedPerson={setSelectedPersonWolski}
          selectedPerson={selectedPersonWolski}
          isEn={isEn}
        />
      </StyledPersonGallery>
    </div>
  )
}

export default AboutPersonGalleryMobile
