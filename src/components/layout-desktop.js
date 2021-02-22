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
  margin: 36px 15vw;
`

const LayoutDesktop = ({ children, pageData }) => {
  return (
    <StyledLayout>
      <HeaderDesktop links={pageData.navbar.links} />
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
