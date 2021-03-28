import React from "react"

import Layout from "../components/layout-desktop"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

const StyledWrapper = styled.div`
  margin-top: 100px;
`

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="404: Not found" />
      <StyledWrapper>
        <h1>{t("notFound.title")}</h1>
        <p>{t("notFound.paragraph")}</p>
      </StyledWrapper>
    </Layout>
  )
}

export default NotFoundPage
