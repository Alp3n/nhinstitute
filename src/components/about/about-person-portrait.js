import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/my-theme"
import Img from "gatsby-image"

const circles = [
  {
    color: myTheme.color["portrait-1"],
    left: "-10%",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  {
    color: myTheme.color["portrait-2"],
    left: "3.3%",
    height: "100%",
    width: "100%",
    zIndex: 2,
  },
  {
    color: myTheme.color["portrait-3"],
    left: "-3.3%",
    height: "90%",
    width: "90%",
    zIndex: 3,
  },
]

const StyledPortraitWrapper = styled.div`
  display: flex;
  height: 15vw;
  width: 15vw;
  position: relative;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    height: 30vw;
    width: 30vw;
  }

  @media only screen and (max-width: 700px) {
    height: 60vw;
    width: 60vw;
  }
`

const StyledPortrait = styled(Img)`
  position: absolute;
  border-radius: 100%;
  border: 2px solid white;
  height: auto;
  width: 12vw;
  z-index: 4;
  @media only screen and (max-width: 1200px) {
    width: 26vw;
  }
  @media only screen and (max-width: 700px) {
    width: 50vw;
  }
`

const StyledBackground = styled.div`
  position: absolute;
  background-color: ${props => props.color};
  left: ${props => props.left};
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 100%;
`
const AboutPersonPortrait = ({ image }) => {
  return (
    <StyledPortraitWrapper>
      <StyledPortrait fluid={image} />
      {circles.map(circle => (
        <StyledBackground
          key={circle.color}
          color={circle.color}
          left={circle.left}
          height={circle.height}
          width={circle.width}
          zIndex={circle.zIndex}
        />
      ))}
    </StyledPortraitWrapper>
  )
}

export default AboutPersonPortrait
