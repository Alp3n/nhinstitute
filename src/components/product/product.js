import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../button/button"
import myTheme from "../../styles/myTheme"

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
  /* place-content: center; */
  justify-content: center;
`
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledParagraph = styled.p`
  font-size: ${myTheme.typography["text-p"]};
  color: ${myTheme.color["blue-4"]};
  margin: 2% 0;
  font-family: "Lato";
  font-weight: 300;
`

const StyledHeading = styled.h1`
  font-weight: 400;
`

const StyledBreakLine = styled.div`
  background-color: ${myTheme.color["blue-4"]};
  width: 100%;
  height: 2px;
`
const StyledButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Product = ({ width, height, buttonOff, item }) => {
  const data = useStaticQuery(graphql`
    query {
      tenfertil: file(name: { eq: "tenfertil" }) {
        childImageSharp {
          fluid(quality: 1) {
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
      />
      <StyledInfo>
        <StyledHeading size="small">TENfertil&#8482; ON</StyledHeading>
        {item.texts.map(text => (
          <StyledParagraph key={text.text}>{text.text}</StyledParagraph>
        ))}
        <StyledBreakLine />
      </StyledInfo>
      <StyledButtons>
        {buttonOff ? null : (
          <Button href={`https://tenfertil.pl`} label="WIĘCEJ O TENFERTIL" />
        )}
        {buttonOff ? null : (
          <Button href={`https://tenfertil.pl/buy`} label="GDZIE KUPIĆ" />
        )}
      </StyledButtons>
      <StyledParagraph>
        Wkrótce będą dostępne na rynku Polskim <strong>TENfertil ONA</strong> i{" "}
        <strong>TENhair</strong>
      </StyledParagraph>
    </StyledWrapper>
  )
}

export default Product
