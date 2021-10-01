import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import GalleryImage from "./galleryImage"

const StyledGalleryWrapper = styled.div`
  display: grid;
  margin: 58px 0;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 60px 100px 125px 125px 125px 125px;
  grid-gap: 5px;
  grid-template-areas:
    ". . . mom mom mom mom . "
    ". . . mom mom mom mom . "
    "dad dad dad mom mom mom mom . "
    "dad dad dad mom mom mom mom . "
    "dad dad dad title title title title title "
    "dad dad dad title title title title title ";
  /* ". . title title title title . ."
    ". . title title title title . ."
    "dad dad dad dad mom mom mom mom"
    "dad dad dad dad mom mom mom mom"
    "dad dad dad dad mom mom mom mom"
    "dad dad dad dad mom mom mom mom"; */

  .dad {
    grid-area: dad;
  }
  .mom {
    grid-area: mom;
  }
  .title {
    margin-left: 12%;
    grid-area: title;
    align-self: flex-end;
  }
`

const StyledHeading = styled.p`
  font-weight: 700;
  line-height: 74px;
  font-size: 68px;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  margin: 0 0 20px 0;

  @media only screen and (max-width: 1470px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 1290px) {
    font-size: 46px;
  }
`

const StyledP = styled.p`
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  margin: 0;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* text-align: center; */
`

const GalleryDesktop = ({ title }) => {
  const data = useStaticQuery(graphql`
    query ImagesGalleryDesktop {
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
      <StyledWrapper area="title" className="title">
        <StyledHeading>{title.heading}</StyledHeading>
        {/* <StyledLine /> */}
        <StyledP>{title.paragraph}</StyledP>
      </StyledWrapper>

      <GalleryImage
        image={data.dad.nodes[0].childImageSharp.fluid}
        area="dad"
        gallery
      />
      <GalleryImage
        image={data.mom.nodes[0].childImageSharp.fluid}
        area="mom"
        gallery
      />
    </StyledGalleryWrapper>
    // <StyledGalleryWrapper>
    //   <StyledWrapper>
    //     <StyledHeading>{title.heading}</StyledHeading>
    //     <StyledLine />
    //     <StyledP>{title.paragraph}</StyledP>
    //   </StyledWrapper>
    //   <StyledGalleryBig>
    //     {data.imagesBig.nodes.map(image => (
    //       <GalleryImage
    //         key={image.id}
    //         image={image.childImageSharp.fluid}
    //         area={image.name}
    //       />
    //     ))}
    //   </StyledGalleryBig>
    // </StyledGalleryWrapper>
  )
}

export default GalleryDesktop
