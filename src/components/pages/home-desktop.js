import React from "react"
import { pageData } from "../../content/data/page-data"
import GalleryDesktop from "../gallery/gallery-desktop"
import ScrollArrow from "../scroll-arrow"
import Section from "../section/section"
import AboutPersonGallery from "../about/desktop/about-person-gallery"
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
          <Product
            key={item.id}
            item={item}
            width={`25vw`}
            height={`25vw`}
            soonPL={pageData.sections.products.soonPL}
            soonEN={pageData.sections.products.soonEN}
          />
        ))}
      </Section>
      <Section
        id={pageData.sections.cooperation.id}
        title={pageData.sections.cooperation.title}
        texts={pageData.sections.cooperation.texts}
      >
        <Contact form={pageData.form} />
      </Section>
    </>
  )
}

export default HomeDesktop
