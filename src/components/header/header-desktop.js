import React, { useState } from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
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

const HeaderDesktop = () => {
  // const [isVisible, setVisible] = useState(false)
  // const openMenu = useMediaQuery({ query: "(max-width: 1630px)" })
  // const handleClick = () => {
  //   setVisible(isVisible => !isVisible)
  // }

  return (
    <StyledHeader>
      <StyledBox>
        <Logo width="350px" />
        <Nav flex="flex" />
        {/* openMenu ? (
          <MenuButton handleClick={handleClick} isVisible={isVisible} />
        ) : (
          <Nav flex="flex" />
        ) */}
      </StyledBox>

      {/* <Menu isVisible={isVisible} /> */}
    </StyledHeader>
  )
}

export default HeaderDesktop
