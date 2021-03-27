import React from "react"
import Section from "../section/section"
import AboutPersonGalleryMobile from "../about/mobile/about-person-gallery-mobile"
import GalleryMobile from "../gallery/gallery-mobile"
import Product from "../product/product"
import ContactForm from "../contact/contact-form"
import { useTranslation } from "react-i18next"

const HomeMobile = () => {
  const { t } = useTranslation()
  return (
    <>
      <GalleryMobile title={t("title.desktop")} />
      <Section
        id={t("sections.about.id")}
        title={t("sections.about.title")}
        texts={t("sections.about.texts")}
      >
        <AboutPersonGalleryMobile people={t("people")} more={t("more")} />
      </Section>
      <Section
        id={t("sections.products.id")}
        title={t("sections.products.title")}
        texts={t("sections.products.texts")}
        className="products"
      >
        {t("sections.products.items").map(item => (
          <Product
            key={item.id}
            item={item}
            width={`60vw`}
            height={`60vw`}
            soon={t("sections.products.soon")}
          />
        ))}
      </Section>
      <Section
        id={t("sections.cooperation.id")}
        title={t("sections.cooperation.title")}
        texts={t("sections.cooperation.texts")}
      >
        <ContactForm form={t("form")} />
      </Section>
    </>
  )
}

export default HomeMobile
