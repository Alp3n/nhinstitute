import React from "react"
import styled from "styled-components"
import "./layout.css"
import { useTranslation } from "react-i18next"
import HeaderDesktop from "./header/header-desktop"
import GalleryDesktop from "./gallery/gallery-desktop"
import FooterDesktop from "./footer/footer-desktop"
import { pageData } from "../content/data/page-data"

const StyledLayout = styled.div`
  width: 100%;
`

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px 13% 0 13%;

  @media only screen and (max-width: 1460px) {
    margin: 0 8vw;
  }
`

const LayoutDesktop = ({ children }) => {
  const { t } = useTranslation()
  return (
    <StyledLayout>
      <HeaderDesktop />
      <StyledBody>
        <GalleryDesktop title={t("title.desktop")} />
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
