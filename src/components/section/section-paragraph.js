import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const StyledParagraph = styled.p`
  font-size: ${myTheme.typography["text-p"]};
  color: ${myTheme.color["blue-4"]};
  margin-bottom: 5%;
`

const SectionParagraph = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>
}

export default SectionParagraph
