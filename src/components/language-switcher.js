import React, { useState } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import { CgChevronDown, CgChevronUp } from "react-icons/cg"

const Button = styled.button`
  border: none;
  padding: 0;
  margin: 0 16px 0 0;
  background-color: transparent;
  color: #151070;
  font-size: 20px;
  text-transform: uppercase;
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
    padding: 0;
    margin-left: 20px;
    /* text-align: center; */
  }
`
const StyledP = styled.p`
  font-weight: bold;
  color: #00b4aa;
  text-transform: uppercase;
  font-size: 20px;
  margin: 0;
`

const DisplayText = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
`

const LanguageSwitcher = () => {
  const [open, setOpen] = useState()
  const { i18n } = useTranslation()
  const languages = [
    { code: "pl", label: "pl" },
    { code: "en", label: "en" },
    { code: "vn", label: "vn" },
  ]

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng)
    setOpen(false)
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
      {open ? null : (
        <DisplayText
          onClick={() => {
            setOpen(true)
          }}
        >
          <StyledP>{i18n.language}</StyledP>
          <CgChevronDown />
        </DisplayText>
      )}
      {open
        ? languages.map(language => (
            <div key={language.code}>{renderLanguageChoice(language)}</div>
          ))
        : null}
    </Wrapper>
  )
}

export default LanguageSwitcher
