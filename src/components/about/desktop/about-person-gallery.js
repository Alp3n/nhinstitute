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

const AboutPersonGallery = () => {
  const [selectedPerson, setSelectedPerson] = useState(null)

  const data = useStaticQuery(graphql`
    query Images($reg: String = "/people/") {
      people: allMdx(
        filter: { frontmatter: { slug: { regex: $reg } } }
        sort: { fields: frontmatter___myid }
      ) {
        edges {
          node {
            id
            slug
            frontmatter {
              slug
              name
              myid
              titles
              texts
              featuredImage {
                id
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      {selectedPerson === null ? (
        <StyledPersonGallery>
          {data.people.edges.map(person => (
            <AboutPerson
              key={person.node.id}
              person={person.node}
              setSelectedPerson={setSelectedPerson}
              selectedPerson={selectedPerson}
            />
          ))}
        </StyledPersonGallery>
      ) : (
        <StyledPersonWrapper>
          <AboutPersonMore
            selectedPerson={selectedPerson}
            setSelectedPerson={setSelectedPerson}
          />
        </StyledPersonWrapper>
      )}
    </div>
  )
}

export default AboutPersonGallery
