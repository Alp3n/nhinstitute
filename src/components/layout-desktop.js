import React from "react"
import styled from "styled-components"

import HeaderDesktop from "./header/header-desktop"
import "./layout.css"

import FooterDesktop from "./footer/footer-desktop"
import { pageData } from "../content/data/page-data"

const StyledLayout = styled.div`
  width: 100%;
`

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px 15vw;

  @media only screen and (max-width: 1370px) {
    margin: 36px 8vw;
  }
`

const LayoutDesktop = ({ children, isEn }) => {
  return (
    <StyledLayout>
      <HeaderDesktop isEn={isEn} />
      <StyledBody>
        <main>{children}</main>
      </StyledBody>
      <FooterDesktop
        email={pageData.footer.email}
        number={pageData.footer.number}
        company={pageData.footer.company}
        copyrights={pageData.footer.copyrights}
      />
    </StyledLayout>
  )
}

export default LayoutDesktop
