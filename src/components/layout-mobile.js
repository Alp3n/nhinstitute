import React from "react"
import styled from "styled-components"

import HeaderMobile from "./header/header-mobile"
import FooterMobile from "./footer/footer-mobile"
import "./layout.css"
import { pageData } from "../content/data/page-data"

const StyledBody = styled.div`
  justify-self: center;
  margin: 0 auto;
  max-width: 1520px;
`

const LayoutMobile = ({ children, isEn }) => {
  return (
    <>
      <HeaderMobile isEn={isEn} />
      <StyledBody>
        <main>{children}</main>
      </StyledBody>
      <FooterMobile
        isEn={isEn}
        email={pageData.footer.email}
        number={pageData.footer.number}
        company={pageData.footer.company}
        copyrights={pageData.footer.copyrights}
      />
    </>
  )
}

export default LayoutMobile
