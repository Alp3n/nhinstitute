import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../../styles/my-theme"

const StyledButtonTo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 48px; */
  border: none;
  background-color: ${myTheme.color.button};
  color: ${myTheme.color.white};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  margin: 1rem 0;
  padding: 1rem 14px;
  &:hover {
    background-color: ${myTheme.color.button};
    cursor: pointer;
  }
`

const StyledButtonHref = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  border: none;
  background-color: ${myTheme.color.button};
  color: ${myTheme.color.white};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  padding: 6px 6px;

  &:hover {
    background-color: ${myTheme.color["button-hover"]};
    cursor: pointer;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 22px;
    height: 54px;
    padding: 0 12px;
  }
`

const Button = ({ label, to, href, className }) => {
  return (
    <>
      {href ? (
        <StyledButtonHref href={href} target={`_blank`} {...className}>
          {label}
        </StyledButtonHref>
      ) : (
        <StyledButtonTo to={to} {...className}>
          {label}
        </StyledButtonTo>
      )}
    </>
  )
}

export default Button
