import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  width: 100%;
  margin-bottom: 8%;
  line-height: 40px;

  &p:first-child {
    margin: 300px;
  }

  @media only screen and (max-width: 1200px) {
    margin: 10% 0;
    padding: 0 5%;
    line-height: 35px;

    &.products {
      background-color: #f4f4f4;
      padding: 15% 5%;
    }
  }
`
const StyledHeading = styled.h1`
  text-transform: uppercase;
  font-weight: lighter;

  /* @media only screen and (max-width: 700px) {
    font-size: 38px;
    font-weight: 300;
  } */
`

const Section = ({ id, children, texts, title, className }) => {
  return (
    <StyledSection id={id} className={className}>
      <StyledHeading>{title}</StyledHeading>
      {texts.map((text, index) => (
        <p key={index}>{text.text}</p>
      ))}
      {children}
    </StyledSection>
  )
}

export default Section
