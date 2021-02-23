import React from "react"
import Section from "../section/section"
import AboutPersonGalleryMobile from "../about/mobile/about-person-gallery-mobile"
import GalleryMobile from "../gallery/gallery-mobile"
import Product from "../product/product"
import ContactForm from "../contact/contact-form"
import { pageData } from "../../content/data/page-data"
import { pageDataEn } from "../../content/data/page-data-en"

const HomeMobile = ({ isEn }) => {
  const myPageData = isEn ? pageDataEn : pageData
  return (
    <>
      <GalleryMobile title={myPageData.title.mobile} />
      <Section
        id={myPageData.sections.about.id}
        title={myPageData.sections.about.title}
        texts={myPageData.sections.about.texts}
      >
        <AboutPersonGalleryMobile isEn={isEn} />
      </Section>
      <Section
        id={myPageData.sections.products.id}
        title={myPageData.sections.products.title}
        texts={myPageData.sections.products.texts}
        className="products"
      >
        {myPageData.sections.products.items.map(item => (
          <Product
            key={item.id}
            item={item}
            width={`60vw`}
            height={`60vw`}
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
        <ContactForm form={myPageData.form} />
      </Section>
    </>
  )
}

export default HomeMobile
