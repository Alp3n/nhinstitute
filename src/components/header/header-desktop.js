import React from "react"
import styled from "styled-components"

import Logo from "../logo/logo"

import Nav from "./nav"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f8f8f8;
  z-index: 1000;
`

const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 16px 15%;
`

const HeaderDesktop = ({ links }) => {
  return (
    <StyledHeader>
      <StyledBox>
        <Logo width="350px" />
        <Nav flex="flex" links={links} />
      </StyledBox>
    </StyledHeader>
  )
}

export default HeaderDesktop
