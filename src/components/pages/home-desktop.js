import React from "react"
import GalleryDesktop from "../gallery/gallery-desktop"
import ScrollArrow from "../scroll-arrow"
import Section from "../section/section"
import AboutPersonGallery from "../about/desktop/about-person-gallery"
import Product from "../product/product"
import Contact from "../contact/Contact"
import { useTranslation } from "react-i18next"

const HomeDesktop = () => {
  const { t } = useTranslation()
  return (
    <>
      <GalleryDesktop title={t("title.desktop")} />
      <ScrollArrow href={"#about"} direction={"-45deg"} />
      <Section
        id={t("sections.about.id")}
        title={t("sections.about.title")}
        texts={t("sections.about.texts")}
      >
        <AboutPersonGallery people={t("people")} more={t("more")} />
      </Section>
      <Section
        id={t("sections.products.id")}
        title={t("sections.products.title")}
        texts={t("sections.products.texts")}
      >
        {t("sections.products.items").map(item => (
          <Product
            key={item.id}
            item={item}
            width={`25vw`}
            height={`25vw`}
            soon={t("sections.products.soon")}
          />
        ))}
      </Section>
      <Section
        id={t("sections.cooperation.id")}
        title={t("sections.cooperation.title")}
        texts={t("sections.cooperation.texts")}
      >
        <Contact form={t("form")} />
      </Section>
    </>
  )
}

export default HomeDesktop
