import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    padding: 0;
    margin-left: 20px;
  }
`

const StyledSelect = styled.select`
  border: none;
  background-color: ${props => props.desktop && "transparent"};
  text-transform: uppercase;
  font-size: 20px;
  color: #00b4aa;
  -webkit-appearance: menulist-button;
`

const StyledOption = styled.option`
  color: #000;
`

const LanguageSwitcher = ({ desktop }) => {
  const { i18n } = useTranslation()
  const languages = [
    { code: "pl", label: "PL" },
    { code: "en", label: "EN" },
    { code: "vn", label: "VN" },
  ]

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <Wrapper>
      <StyledSelect
        desktop={desktop}
        name="languages"
        onChange={event => handleChangeLanguage(event.target.value)}
      >
        {languages.map(lang => (
          <StyledOption key={lang.code} value={lang.code}>
            {lang.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </Wrapper>
  )
}

export default LanguageSwitcher
