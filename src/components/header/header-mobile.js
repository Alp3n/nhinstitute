import React, { useState } from "react"
import styled from "styled-components"

import Logo from "../logo/logo"
import Menu from "./menu"
import MenuButton from "./menu-button"

const StyledHeaderSmall = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 1rem;
  z-index: 1000;
`

const HeaderMobile = ({ isEn }) => {
  const [isVisible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(isVisible => !isVisible)
  }

  return (
    <>
      <StyledHeaderSmall>
        <Logo width="250px" />
        <MenuButton handleClick={handleClick} isVisible={isVisible} />
      </StyledHeaderSmall>

      <Menu isVisible={isVisible} isEn={isEn} setVisible={setVisible} />
    </>
  )
}
export default HeaderMobile
