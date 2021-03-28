import React from "react"
import { useMediaQuery } from "react-responsive"

import LayoutDesktop from "../components/layout-desktop"
import LayoutMobile from "../components/layout-mobile"
import HomeDesktop from "../components/pages/home-desktop"
import HomeMobile from "../components/pages/home-mobile"
import SEO from "../components/seo"
import "../i18n.js"

const IndexPage = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })
  return (
    <>
      <SEO title="Suplementy diety dla par starających się o dzieci." />
      {isBigScreen && (
        <LayoutDesktop>
          <HomeDesktop />
        </LayoutDesktop>
      )}
      {isTabletOrMobile && (
        <LayoutMobile>
          <HomeMobile />
        </LayoutMobile>
      )}
    </>
  )
}

export default IndexPage
