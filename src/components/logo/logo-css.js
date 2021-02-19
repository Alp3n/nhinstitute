import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/my-theme"

const circles = [
  {
    color: myTheme.color["blue-2"],
    top: "-1px",
    left: "-3px",
  },
  {
    color: myTheme.color["blue-3"],
    top: "0",
    left: "0",
  },
  {
    color: myTheme.color["blue-4"],
    top: "1px",
    left: "3px",
  },
]

const StyledIconWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`
const StyledCircleWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 30px;
  margin-right: 8px;
`

const StyledCircle = styled.div`
  background-color: transparent;
  border: 1px solid ${props => props.color};
  border-radius: 100%;
  width: 26px;
  height: 26px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`

const StyledText = styled.span`
  color: ${myTheme.color["blue-4"]};
  font-size: 1.3rem;
`

const LogoCss = ({ companyName }) => {
  return (
    <StyledIconWrapper href="https://nhinstitute.pl" target={"_blank"}>
      <StyledCircleWrapper>
        {circles.map(circle => (
          <StyledCircle
            key={circle.color}
            color={circle.color}
            top={circle.top}
            left={circle.left}
          />
        ))}
      </StyledCircleWrapper>
      <StyledText>{companyName}</StyledText>
    </StyledIconWrapper>
  )
}
export default LogoCss
