import React from "react"
import styled from "styled-components"
import myTheme from "../../../styles/my-theme"
const StyledWrapper = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "aboutperson info info";

  .aboutperson {
    grid-area: aboutperson;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-areas: "aboutperson" "info" "info";
  }
`

const StyledInfoWrapper = styled.div`
  border-left: 1px solid ${myTheme.color["blue-1"]};
  padding-left: 10%;
  font-weight: 300;
  color: ${myTheme.color["blue-4"]};
  grid-area: info;

  @media only screen and (max-width: 1200px) {
    /* font-size: 20px; */
    border: none;
    padding: 0;
  }
  @media only screen and (max-width: 700px) {
    /* font-size: 18px; */
    border: none;
    padding: 0;
  }
`

const StyledInfo = styled.p``

const AboutPersonMoreMobile = ({ selectedPerson }) => {
  return (
    <StyledWrapper className="aboutperson">
      <StyledInfoWrapper>
        {selectedPerson.frontmatter.texts.map(text => (
          <StyledInfo className="info" key={text}>
            {text}
            <br />
          </StyledInfo>
        ))}
      </StyledInfoWrapper>
    </StyledWrapper>
  )
}

export default AboutPersonMoreMobile
