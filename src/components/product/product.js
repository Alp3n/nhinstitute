import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../button/button"

const StyledImg = styled(Img)`
  margin-bottom: 5vh;
  /* transform: scale(0.8); */
  width: ${props => props.width};
  height: ${props => props.height};
  place-self: left;

  @media only screen and (max-width: 1200px) {
    place-self: center;
    margin-bottom: 4vh;
  }

  @media only screen and (max-width: 700px) {
    margin-bottom: 3vh;
    left: 30px;
    width: 300px;
    height: 300px;
  }
`

const StyledLogo = styled(Img)`
  margin-bottom: 4vh;
  width: 350px;
  height: 95px;
  place-self: left;

  @media only screen and (max-width: 700px) {
    margin-bottom: 2vh;
    width: 90%;
    height: auto;
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  justify-content: left;

  grid-template-areas:
    "myimage"
    "heading"
    "info"
    "buttons";
  .heading {
    grid-area: heading;
  }
  .image {
    grid-area: myimage;
  }
  .info {
    grid-area: info;
  }
  .buttons {
    grid-area: buttons;
  }
  .breakline {
    grid-area: breakline;
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "myimage"
      "heading"
      "info"
      "buttons"
      "breakline";
  }

  @media only screen and (max-width: 700px) {
    & #products > div:nth-child(3) {
      margin-bottom: 20%;
    }
  }
`
const StyledInfo = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  margin-bottom: 6%;

  @media only screen and (max-width: 700px) {
    font-size: 18px;
  }
`

const StyledButtons = styled.div`
  width: 50%;

  @media only screen and (max-width: 1200px) {
    display: grid;
    justify-content: stretch;
    width: 100%;
    grid-gap: 16px;
    margin-bottom: 10%;
  }
`

const Product = ({ width, height, item }) => {
  const data = useStaticQuery(graphql`
    query {
      tenfertilON: file(name: { eq: "tenfertilON" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tenfertilONA: file(name: { eq: "tenfertilONA" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoOn: file(name: { eq: "logoOn" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoOna: file(name: { eq: "logoOna" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledWrapper>
      <StyledImg
        fluid={
          item.name === "TENfertil ONA"
            ? data.tenfertilONA.childImageSharp.fluid
            : data.tenfertilON.childImageSharp.fluid
        }
        width={width}
        height={height}
        className="image"
      />
      {/* {isMobile ? (
        <StyledHeading>{item.heading}</StyledHeading>
      ) : ( */}
      <StyledLogo
        fluid={
          item.name === "TENfertil ONA"
            ? data.logoOna.childImageSharp.fluid
            : data.logoOn.childImageSharp.fluid
        }
      />
      {/* )} */}

      {item.texts.map(text => (
        <StyledInfo key={text.text} className="info">
          {text.text}
        </StyledInfo>
      ))}

      <StyledButtons className="buttons">
        <Button href={item.buttonMore.href} label={item.buttonMore.label} />
      </StyledButtons>
    </StyledWrapper>
  )
}

export default Product
