import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/my-theme"

import Nav from "./nav"

const StyledMenuWrapper = styled.div`
  position: fixed;
  background-color: #f8f8f8;
  width: 100%;
  flex-direction: column;
  display: ${props => (props.isVisible ? "block" : "none")};
  top: 3.25rem;
  padding-bottom: 2rem;
  z-index: 100;

  @media only screen and (min-width: 1201px) {
    background-color: transparent;
    width: 80%;
  }
`
const StyledBreak = styled.div`
  margin: 0 1rem 1rem 1rem;
  border-bottom: 1px solid ${myTheme.color["blue-4"]};

  @media only screen and (min-width: 1201px) {
    margin: 0;
    margin-right: 1rem;
  }
`

const Menu = (props, { isVisible, setVisible }) => {
  return (
    <StyledMenuWrapper {...props} className={isVisible ? "opened" : "closed"}>
      <StyledBreak />
      <Nav isEn={props.isEn} setVisible={setVisible} />
    </StyledMenuWrapper>
  )
}

export default Menu
