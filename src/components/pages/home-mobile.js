import React from "react"
import styled from "styled-components"
import Section from "../section/section"
import AboutPersonGallery from "../about/AboutPersonGallery"
import { pageData } from "../../content/data/page-data"

import GalleryMobile from "../gallery/gallery-mobile"

import myTheme from "../../styles/myTheme"

const HomeDesktop = () => {
  return (
    <>
      <GalleryMobile />
      <Section
        id={pageData.sections.about.id}
        title={pageData.sections.about.title}
        texts={pageData.sections.about.texts}
      >
        <AboutPersonGallery />
      </Section>
    </>
  )
}

export default HomeDesktop
