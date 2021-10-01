import React from "react"
import SectionMobile from "../section/section-mobile"
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
      <SectionMobile
        id={t("sections.about.id")}
        title={t("sections.about.title")}
        texts={t("sections.about.mobileTexts")}
      >
        <AboutPersonGalleryMobile people={t("people")} more={t("more")} />
      </SectionMobile>
      <SectionMobile
        id={t("sections.products.id")}
        title={t("sections.products.title")}
        texts={t("sections.products.texts")}
        className="products product"
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
      </SectionMobile>
      <SectionMobile
        id={t("sections.cooperation.id")}
        title={t("sections.cooperation.title")}
        texts={t("sections.cooperation.texts")}
      >
        <ContactForm form={t("form")} />
      </SectionMobile>
    </>
  )
}

export default HomeMobile
