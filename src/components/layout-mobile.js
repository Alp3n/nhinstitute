import React from "react"
import styled from "styled-components"

import HeaderMobile from "./header/header-mobile"
import FooterMobile from "./footer/footer-mobile"
import "./layout.css"

const StyledBody = styled.div`
  justify-self: center;
  margin: 0 auto;
  max-width: 1520px;
  overflow: hidden;
`

const LayoutMobile = ({ children, pageData }) => {
  return (
    <>
      <HeaderMobile links={pageData.navbar.links} />
      <StyledBody>
        <main>{children}</main>
      </StyledBody>
      <FooterMobile
        email={pageData.footer.email}
        number={pageData.footer.number}
        company={pageData.footer.company}
        copyrights={pageData.footer.copyrights}
      />
    </>
  )
}

export default LayoutMobile
