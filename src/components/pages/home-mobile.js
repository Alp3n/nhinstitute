import React from "react"
import Section from "../section/section"
import AboutPersonGalleryMobile from "../about/mobile/about-person-gallery-mobile"
import { pageData } from "../../content/data/page-data"

import GalleryMobile from "../gallery/gallery-mobile"

const HomeDesktop = () => {
  return (
    <>
      <GalleryMobile />
      <Section
        id={pageData.sections.about.id}
        title={pageData.sections.about.title}
        texts={pageData.sections.about.texts}
      >
        <AboutPersonGalleryMobile />
      </Section>
    </>
  )
}

export default HomeDesktop
