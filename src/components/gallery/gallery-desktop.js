import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import GalleryImage from "./galleryImage"

const StyledGalleryBig = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-columns: repeat(5, minmax(25vh, 30vh)); */
  grid-template-rows: repeat(2, 0.6fr);
  /* grid-template-rows: repeat(2, minmax(10vw, 17vw)); */
  grid-gap: 0.5rem;
  grid-template-areas:
    "img1 img1 img2 img2 img3"
    "img4 img4 img5 img6 img7";

  .title {
    grid-area: img1;
  }
  .mama {
    grid-area: img2;
  }
  .molecules {
    grid-area: img3;
  }
  .wspolpraca {
    grid-area: img4;
  }
  .water {
    grid-area: img5;
  }
  .doctor {
    grid-area: img6;
  }
  .probes {
    grid-area: img7;
  }
`
const StyledHeading = styled.h1`
  /* margin-bottom: 8%; */
  font-weight: 400;
  font-size: 3.3vw;
`

const StyledP = styled.p`
  font-size: 1.3vw;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const GalleryDesktop = () => {
  const data = useStaticQuery(graphql`
    query ImagesGalleryDesktop {
      imagesBig: allFile(filter: { relativeDirectory: { eq: "jpg" } }) {
        nodes {
          id
          name
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <StyledGalleryBig>
      <StyledWrapper className="title">
        <StyledHeading>
          ZDROWIE <br />I PŁODNOŚĆ
        </StyledHeading>
        <StyledP>
          Best people, best products,
          <br />
          best opportunities
        </StyledP>
      </StyledWrapper>
      {data.imagesBig.nodes.map(image => (
        <GalleryImage
          key={image.id}
          image={image.childImageSharp.fluid}
          area={image.name}
        />
      ))}
    </StyledGalleryBig>
  )
}

export default GalleryDesktop
