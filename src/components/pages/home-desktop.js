import React from "react"
import GalleryDesktop from "../gallery/gallery-desktop"
import ScrollArrow from "../scroll-arrow"
import Section from "../section/section"
import AboutPersonGallery from "../about/desktop/about-person-gallery"
import Product from "../product/product"
import Contact from "../contact/Contact"
import { pageData } from "../../content/data/page-data"
import { pageDataEn } from "../../content/data/page-data-en"

const HomeDesktop = ({ isEn }) => {
  const myPageData = isEn ? pageDataEn : pageData
  return (
    <>
      <GalleryDesktop title={myPageData.title.desktop} />
      <ScrollArrow href={"#about"} direction={"-45deg"} />
      <Section
        id={myPageData.sections.about.id}
        title={myPageData.sections.about.title}
        texts={myPageData.sections.about.texts}
      >
        <AboutPersonGallery isEn={isEn} />
      </Section>
      <Section
        id={myPageData.sections.products.id}
        title={myPageData.sections.products.title}
        texts={myPageData.sections.products.texts}
      >
        {myPageData.sections.products.items.map(item => (
          <Product
            key={item.id}
            item={item}
            width={`25vw`}
            height={`25vw`}
            soonPL={myPageData.sections.products.soonPL}
            soonEN={myPageData.sections.products.soonEN}
          />
        ))}
      </Section>
      <Section
        id={myPageData.sections.cooperation.id}
        title={myPageData.sections.cooperation.title}
        texts={myPageData.sections.cooperation.texts}
      >
        <Contact form={myPageData.form} />
      </Section>
    </>
  )
}

export default HomeDesktop
