import React from "react"
import styled from "styled-components"
// import myTheme from "../../styles/myTheme"

import SectionParagraph from "./section-paragraph"

const StyledSection = styled.section`
  width: 100%;
  margin-bottom: 8%;
  line-height: 40px;

  &p:first-child {
    margin: 300px;
  }

  @media only screen and (max-width: 700px) {
    margin: 10% 0 10% 0;
    line-height: 35px;
  }
`
const StyledHeading = styled.h1`
  font-size: 56px;
  font-weight: 400;
  text-transform: uppercase;

  @media only screen and (max-width: 700px) {
    font-size: 38px;
    font-weight: 300;
    margin: 0 5%;
  }
`

const Section = ({ id, children, texts, title }) => {
  return (
    <StyledSection id={id}>
      <StyledHeading>{title}</StyledHeading>
      {texts.map((text, index) => (
        <SectionParagraph key={index}>{text.text}</SectionParagraph>
      ))}
      {children}
    </StyledSection>
  )
}

export default Section
