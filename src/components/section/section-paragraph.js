import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const StyledParagraph = styled.p`
  font-size: ${myTheme.typography["text-p"]};
  color: ${myTheme.color["blue-4"]};
  margin-bottom: 5%;

  @media only screen and (max-width: 700px) {
    font-size: 18px;
    /* line-height: normal; */
    margin: 5% 5% 15% 5%;
  }
`

const SectionParagraph = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>
}

export default SectionParagraph
