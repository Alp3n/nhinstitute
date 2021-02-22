import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../button/button"
import myTheme from "../../styles/my-theme"

const StyledImg = styled(Img)`
  margin-bottom: 4vh;
  width: ${props => props.width};
  height: ${props => props.height};
  place-self: center;
`

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  justify-content: center;
  grid-template-areas:
    "myimage heading"
    "myimage info"
    "buttons breakline";
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
      "heading"
      "myimage"
      "info"
      "buttons"
      "breakline";
  }
`
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`
// const StyledParagraph = styled.p`
//   font-size: ${myTheme.typography["text-p"]};
//   color: ${myTheme.color["blue-4"]};
//   margin: 2% 0;
//   font-weight: 300;
//   @media only screen and (max-width: 1200px) {
//     font-size: 18px;
//   }
// `

const StyledHeading = styled.h2`
  @media only screen and (max-width: 1200px) {
    margin-top: 5%;
    text-align: center;
    font-size: 38px;
  }
`

const StyledBreakLine = styled.div`
  background-color: ${myTheme.color["blue-4"]};
  width: 100%;
  height: 2px;
  @media only screen and (max-width: 1200px) {
    margin: 10% 0;
  }
`

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    display: grid;
    justify-content: stretch;
    grid-gap: 16px;
    margin-bottom: 10%;
  }
`

const Product = ({ width, height, buttonOff, item, soonPL, soonEN }) => {
  const data = useStaticQuery(graphql`
    query {
      tenfertil: file(name: { eq: "tenfertil" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tenfertilLogo: file(name: { eq: "logo-small" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledWrapper>
      <StyledImg
        fluid={data.tenfertil.childImageSharp.fluid}
        width={width}
        height={height}
        className="image"
      />
      <StyledHeading>{item.heading}</StyledHeading>

      <StyledInfo className="info">
        {item.texts.map(text => (
          <p key={text.text}>{text.text}</p>
        ))}
        <StyledBreakLine className="breakline" />
      </StyledInfo>
      <StyledButtons className="buttons">
        {buttonOff ? null : (
          <Button
            href={item.buttonMorePL.href}
            label={item.buttonMorePL.label}
          />
        )}
        {buttonOff ? null : (
          <Button href={item.buttonBuyPL.href} label={item.buttonBuyPL.label} />
        )}
      </StyledButtons>
      {soonPL}
      {soonEN}
    </StyledWrapper>
  )
}

export default Product
