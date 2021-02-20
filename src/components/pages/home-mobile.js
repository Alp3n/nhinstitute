import React from "react"
import Section from "../section/section"
import AboutPersonGalleryMobile from "../about/mobile/about-person-gallery-mobile"
import { pageData } from "../../content/data/page-data"

import GalleryMobile from "../gallery/gallery-mobile"
import Product from "../product/product"
import ContactForm from "../contact/contact-form"

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
      <Section
        id={pageData.sections.products.id}
        title={pageData.sections.products.title}
        texts={pageData.sections.products.texts}
        className="products"
      >
        {pageData.sections.products.items.map(item => (
          <Product
            key={item.id}
            item={item}
            width={`80vw`}
            height={`80vw`}
            soonPL={pageData.sections.products.soonPL}
          />
        ))}
      </Section>
      <Section
        id={pageData.sections.cooperation.id}
        title={pageData.sections.cooperation.title}
        texts={pageData.sections.cooperation.texts}
      >
        <ContactForm form={pageData.form} />
      </Section>
    </>
  )
}

export default HomeDesktop
