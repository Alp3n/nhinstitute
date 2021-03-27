import React from "react"
import styled from "styled-components"
import myTheme from "../../../styles/my-theme"
import AboutPerson from "./about-person"

const StyledWrapper = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "aboutperson info info";

  .aboutperson {
    grid-area: aboutperson;
  }
`

const StyledInfoWrapper = styled.div`
  border-left: 1px solid ${myTheme.color["blue-1"]};
  padding-left: 10%;
  color: ${myTheme.color["blue-4"]};
  grid-area: info;
  font-size: 22px;
`

const StyledInfo = styled.p``
const AboutPersonMore = ({ selectedPerson, selectedImg, handlePerson }) => {
  return (
    <StyledWrapper className="aboutperson">
      <AboutPerson
        person={selectedPerson}
        img={selectedImg}
        handlePerson={handlePerson}
        className="aboutperson"
      />
      <StyledInfoWrapper>
        {selectedPerson.texts.map(text => (
          <StyledInfo className="info" key={text}>
            {text}
            <br />
          </StyledInfo>
        ))}
      </StyledInfoWrapper>
    </StyledWrapper>
  )
}

export default AboutPersonMore
