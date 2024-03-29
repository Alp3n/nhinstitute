import React from "react"
import styled from "styled-components"

import Logo from "../logo/logo"
import Nav from "./nav"
import LanguageSwitcher from "../language-switcher"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fcfcfc;
  z-index: 1000;
`

const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 32px 13%;

  @media only screen and (max-width: 1370px) {
    margin: 16px 8vw;
  }
`

const HeaderDesktop = () => {
  return (
    <StyledHeader>
      <StyledBox>
        <Logo width="350px" />
        <Nav flex="flex" />
        <LanguageSwitcher desktop />
      </StyledBox>
    </StyledHeader>
  )
}

export default HeaderDesktop
