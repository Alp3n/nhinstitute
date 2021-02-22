import React from "react"
import { useMediaQuery } from "react-responsive"

import LayoutDesktop from "../components/layout-desktop"
import LayoutMobile from "../components/layout-mobile"
import HomeDesktop from "../components/pages/home-desktop"
import HomeMobile from "../components/pages/home-mobile"
import { pageDataEn } from "../content/data/page-data-en"

import SEO from "../components/seo"

const IndexPageEn = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })
  return (
    <>
      <SEO title="Suplement diety dla mężczyzn starających się o dzieci" />
      {isBigScreen && (
        <LayoutDesktop pageData={pageDataEn}>
          <HomeDesktop pageData={pageDataEn} isEn={true} />
        </LayoutDesktop>
      )}
      {isTabletOrMobile && (
        <LayoutMobile pageData={pageDataEn}>
          <HomeMobile pageData={pageDataEn} isEn={true} />
        </LayoutMobile>
      )}
    </>
  )
}

export default IndexPageEn
