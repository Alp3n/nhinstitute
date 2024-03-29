import React from "react"
import styled from "styled-components"
import Product from "../product/product"

const StyledSection = styled.section`
  display: flex;
  width: 100%;
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

const StyledProductsWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 40% 40%;
  gap: 5%;
  margin: 2% 0;
`
const StyledMargin = styled.div`
  margin: ${props => (props.more ? "7% 0 -3% 0" : "6% 0 10% 0")};
`

const Section = ({ id, children, texts, title, className, more, products }) => {
  return (
    <StyledMargin more={more}>
      <StyledSection id={id} className={(className, "anchor")}>
        <StyledLeft>
          <StyledHeading>{title}</StyledHeading>
        </StyledLeft>
        <StyledRight>
          {texts.map((text, index) => (
            <StyledP key={index}>{text.text}</StyledP>
          ))}

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
    </StyledMargin>
  )
}

export default Section
