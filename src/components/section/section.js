import React from "react"
import { CgChevronDown, CgChevronUp } from "react-icons/cg"
import styled from "styled-components"
import myTheme from "../../styles/my-theme"
import AboutPersonGallery from "../about/desktop/about-person-gallery"
import Product from "../product/product"

const StyledSection = styled.section`
  display: flex;
  width: 100%;
  /* margin: 6% 0 10% 0; */
  line-height: 40px;

  &p:first-child {
    margin: 300px;
  }

  @media only screen and (max-width: 1200px) {
    margin: 30px 0;
    padding: 5% 5%;
    line-height: 30px;

    &.products {
      background-color: #f4f4f4;
      padding: 10% 5%;
    }
  }
`
const StyledHeading = styled.p`
  margin-top: 1rem;
  padding: 0;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;

  /* @media only screen and (max-width: 700px) {
    font-size: 36px;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
  } */
`
const StyledP = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 56px;

  @media only screen and (max-width: 700px) {
    font-size: 18px;
  }
`

const StyledLeft = styled.div`
  width: 40%;
  margin-right: 5%;
`
const StyledRight = styled.div`
  width: 55%;
`

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: ${myTheme.color.button};
  padding: 6px;
  text-transform: uppercase;

  &:hover {
    background-color: ${myTheme.color["button-hover"]};
    cursor: pointer;
  }
`

const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  line-height: 40px;
`
const StyledProductsWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 40% 40%;
  gap: 5%;
  margin: 2% 0;
`
const StyledMargin = styled.div`
  margin: 6% 0 10% 0;
`

const Section = ({
  id,
  children,
  texts,
  title,
  className,
  button,
  buttonTextOpen,
  buttonTextClose,
  isMore,
  setIsMore,
  people,
  more,
  products,
}) => {
  return (
    <StyledMargin>
      <StyledSection id={id} className={(className, "anchor")}>
        <StyledLeft>
          <StyledHeading>{title}</StyledHeading>
        </StyledLeft>
        <StyledRight>
          {texts.map((text, index) => (
            <StyledP key={index}>{text.text}</StyledP>
          ))}
          {isMore ? null : button ? (
            <StyledButton onClick={() => setIsMore(!isMore)}>
              {buttonTextOpen}
              <CgChevronDown size="30px" />
            </StyledButton>
          ) : null}
          {children}
        </StyledRight>
      </StyledSection>
      <StyledProductsWrapper>
        {products
          ? products.map(item => (
              <Product
                key={item.id}
                item={item}
                width={`22vw`}
                height={`20vw`}
                className={item.id}
              />
            ))
          : null}
      </StyledProductsWrapper>
      {isMore ? (
        <>
          <AboutPersonGallery
            people={people}
            more={more}
            setIsMore={setIsMore}
          />
          <StyledButtonWrapper>
            <StyledLeft />
            <StyledRight>
              <StyledButton onClick={() => setIsMore(!isMore)}>
                {buttonTextClose}
                <CgChevronUp size="30px" />
              </StyledButton>
            </StyledRight>
          </StyledButtonWrapper>
        </>
      ) : null}
    </StyledMargin>
  )
}

export default Section
