import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/my-theme"
import LanguageSwitcher from "../language-switcher"

import Nav from "./nav"

const StyledMenuWrapper = styled.div`
  position: fixed;
  background-color: #fcfcfc;
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

const Menu = (props, { isVisible }) => {
  return (
    <StyledMenuWrapper {...props} className={isVisible ? "opened" : "closed"}>
      <StyledBreak />
      <Nav />
      <LanguageSwitcher />
    </StyledMenuWrapper>
  )
}

export default Menu
