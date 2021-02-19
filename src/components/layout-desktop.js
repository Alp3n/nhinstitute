import React from "react"
import styled from "styled-components"

import HeaderDesktop from "./header/header-desktop"
import "./layout.css"

import FooterDesktop from "./footer/footer-desktop"

const StyledLayout = styled.div`
  width: 100%;
`

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-items: center; */
  /* width: 70%; */
  margin: 36px 15vw;
`

const LayoutDesktop = ({ children }) => {
  return (
    <StyledLayout>
      <HeaderDesktop />
      <StyledBody>{children}</StyledBody>

      <FooterDesktop
        email={`info@nhinstitute.pl`}
        number={`+48 666 368 005`}
        company={`Sp.z o.o. Białozora 9, 02-817 Warszawa,\nPolska KRS: 0000861627. REGON: 38710727. NIP: 9512507706.`}
      />
    </StyledLayout>
  )
}

export default LayoutDesktop
