import React, { useState } from "react"
import Section from "../section/section"
import { useTranslation } from "react-i18next"
import ContactForm from "../contact/contact-form"

const HomeDesktop = () => {
  const [isMore, setIsMore] = useState(false)
  const { t } = useTranslation()
  return (
    <>
      <Section
        id={t("sections.about.id")}
        title={t("sections.about.title")}
        texts={t("sections.about.texts")}
        button
        setIsMore={setIsMore}
        isMore={isMore}
        buttonTextOpen={t("sections.about.buttonOpen")}
        buttonTextClose={t("sections.about.buttonClose")}
        people={t("people")}
        more={t("more")}
      ></Section>

      <Section
        id={t("sections.products.id")}
        title={t("sections.products.title")}
        texts={t("sections.products.texts")}
        products={t("sections.products.items")}
      ></Section>
      <Section
        id={t("sections.cooperation.id")}
        title={t("sections.cooperation.title")}
        texts={t("sections.cooperation.texts")}
      >
        <div style={{ alignContent: "flex-end" }}>
          <ContactForm form={t("form")} />
        </div>
      </Section>
    </>
  )
}

export default HomeDesktop
