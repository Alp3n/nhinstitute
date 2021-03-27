import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

const Button = styled.button`
  border: none;
  padding: 0;
  margin: 0 16px 0 0;
  background-color: transparent;
  color: #151070;
  font-size: 20px;
`
const Wrapper = styled.div`
  .selected {
    font-weight: bold;
    color: #00b4aa;
  }

  button:last-child {
    margin: 0;
  }

  @media only screen and (max-width: 1200px) {
    text-align: center;
  }
`

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const languages = [
    { code: "pl", label: "PL" },
    { code: "en", label: "EN" },
    { code: "vn", label: "VN" },
  ]

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  const renderLanguageChoice = ({ code, label }) => {
    return (
      <Button
        key={code}
        className={i18n.language === code && "selected"}
        onClick={() => handleChangeLanguage(code)}
      >
        {label}
      </Button>
    )
  }

  return (
    <Wrapper>
      {languages.map(language => renderLanguageChoice(language))}
    </Wrapper>
  )
}

export default LanguageSwitcher
