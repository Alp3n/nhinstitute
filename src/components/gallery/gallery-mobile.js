import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import GalleryImage from "./galleryImage"

const StyledGallerySmall = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 0.5rem;
  grid-template-areas:
    "img1 img1 img1"
    "img2 img2 img3"
    "img4 img5 img6";

  .title {
    grid-area: img1;
  }
  .mama {
    grid-area: img2;
  }
  .molecules {
    grid-area: img3;
  }
  .water {
    grid-area: img4;
  }
  .doctor {
    grid-area: img5;
  }
  .probes {
    grid-area: img6;
  }
`
const StyledHeading = styled.h1`
  font-weight: 300;
  font-size: 42px;
  text-transform: uppercase;
`

const StyledP = styled.p`
  font-size: 18px;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  margin-top: 16px;
`

const GalleryMobile = ({ title }) => {
  const data = useStaticQuery(graphql`
    query ImagesGalleryMobile {
      imagesSmall: allFile(
        filter: { relativeDirectory: { eq: "jpg" } }
        sort: { fields: name }
        limit: 5
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <StyledGallerySmall>
      <StyledWrapper className="title">
        <StyledHeading>{title.heading}</StyledHeading>
        <StyledP>{title.paragraph}</StyledP>
      </StyledWrapper>
      {data.imagesSmall.nodes.map(image => (
        <GalleryImage
          key={image.id}
          image={image.childImageSharp.fluid}
          area={image.name}
        />
      ))}
    </StyledGallerySmall>
  )
}

export default GalleryMobile
