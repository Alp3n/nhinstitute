import React from "react"
import styled from "styled-components"
import { pageData } from "../../content/data/page-data"
import GalleryDesktop from "../gallery/gallery-desktop"
import ScrollArrow from "../ScrollArrow"
import Section from "../section/Section"
import AboutPersonGallery from "../about/AboutPersonGallery"
import Product from "../product/product"
import Contact from "../contact/Contact"

const HomeDesktop = () => {
  return (
    <>
      <GalleryDesktop />
      <ScrollArrow href={"#about"} direction={"-45deg"} />
      <Section
        id={pageData.sections.about.id}
        title={pageData.sections.about.title}
        texts={pageData.sections.about.texts}
      >
        <AboutPersonGallery />
      </Section>
      <Section
        id={pageData.sections.products.id}
        title={pageData.sections.products.title}
        texts={pageData.sections.products.texts}
      >
        {pageData.sections.products.items.map(item => (
          <Product key={item.id} item={item} width={`25vw`} height={`25vw`} />
        ))}
      </Section>
      <Contact />
    </>
  )
}

export default HomeDesktop
