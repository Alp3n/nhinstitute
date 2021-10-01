import React from "react"
import { CgChevronDown } from "react-icons/cg"
import styled from "styled-components"
import myTheme from "../../styles/my-theme"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8%;
  line-height: 40px;
  gap: 10%;

  &p:first-child {
    margin: 300px;
  }

  @media only screen and (max-width: 1200px) {
    margin: 30px 0;
    padding: 5% 8%;
    line-height: 35px;

    &.products {
      background-color: #f4f4f4;
      padding: 10% 8%;
    }
  }
`
const StyledHeading = styled.p`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 36px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
`
const StyledP = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 30px;
`

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  text-align: center;
  font-size: 24px;
  color: white;
  background-color: ${myTheme.color.button};
  padding: 16px;
  text-transform: uppercase;

  &:hover {
    background-color: ${myTheme.color["button-hover"]};
    cursor: pointer;
  }
`

const StyledTexts = styled.div`
  margin-bottom: 56px;
`

const StyledGap = styled.div`
  display: grid;
  gap: 2%;
`

const Section = ({
  id,
  children,
  texts,
  title,
  className,
  button,
  buttonText,
  isMore,
  setIsMore,
}) => {
  return (
    <StyledSection id={id} className={className}>
      <StyledHeading>{title}</StyledHeading>
      <StyledTexts>
        {texts.map((text, index) => (
          <StyledP key={index}>{text.text}</StyledP>
        ))}
      </StyledTexts>
      {isMore ? null : button ? (
        <StyledButton onClick={() => setIsMore(!isMore)}>
          {buttonText}
          <CgChevronDown />
        </StyledButton>
      ) : null}
      <StyledGap>{children}</StyledGap>
    </StyledSection>
  )
}

export default Section
