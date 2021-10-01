import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import GalleryImage from "./galleryImage"

const StyledGallerySmall = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-template-rows: repeat(auto-fill, 60vw);
  /* grid-gap: 2px; */
  grid-template-areas: "dad mom";

  .mom {
    grid-area: mom;
  }
  .dad {
    grid-area: dad;
  }
`
const StyledHeading = styled.p`
  /* font-weight: 700; */
  font-size: 42px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  line-height: 54px;
  margin: 0 0 12px 0;
`

const StyledP = styled.p`
  font-size: 12px;
  text-transform: uppercase;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  margin-top: 16px;
`

const StyledGalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3%;
`

const GalleryMobile = ({ title }) => {
  const data = useStaticQuery(graphql`
    query ImagesGalleryMobile {
      dad: allFile(filter: { name: { eq: "dad" } }, limit: 1) {
        nodes {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      mom: allFile(filter: { name: { eq: "mom" } }, limit: 1) {
        nodes {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <StyledGalleryWrapper>
      <StyledWrapper className="title">
        <StyledHeading>{title.heading}</StyledHeading>
        <StyledP>{title.paragraph}</StyledP>
      </StyledWrapper>
      <StyledGallerySmall>
        <GalleryImage
          image={data.dad.nodes[0].childImageSharp.fluid}
          area="dad"
        />
        <GalleryImage
          image={data.mom.nodes[0].childImageSharp.fluid}
          area="mom"
        />
      </StyledGallerySmall>
    </StyledGalleryWrapper>
  )
}

export default GalleryMobile
