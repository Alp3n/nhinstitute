import React from "react"
import { useMediaQuery } from "react-responsive"

import LayoutDesktop from "../components/layout-desktop"
import LayoutMobile from "../components/layout-mobile"
import HomeDesktop from "../components/pages/home-desktop"
import HomeMobile from "../components/pages/home-mobile"

import SEO from "../components/seo"

const IndexPageEn = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })
  return (
    <>
      <SEO title="Diet supplements for couples trying to have children." />
      {isBigScreen && (
        <LayoutDesktop isEn={true}>
          <HomeDesktop isEn={true} />
        </LayoutDesktop>
      )}
      {isTabletOrMobile && (
        <LayoutMobile isEn={true}>
          <HomeMobile isEn={true} />
        </LayoutMobile>
      )}
    </>
  )
}

export default IndexPageEn
