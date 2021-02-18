import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../../styles/myTheme"

const StyledButtonTo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  max-width: 300px;
  width: 90%;
  border: none;
  background-color: ${myTheme.color["blue-1"]};
  color: ${myTheme.color.white};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem 0;
  padding: 1rem 2rem;
  &:hover {
    background-color: ${myTheme.color.button};
    cursor: pointer;
  }
`

const StyledButtonHref = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  max-width: 300px;
  border: none;
  background-color: ${myTheme.color["blue-1"]};
  color: ${myTheme.color.white};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 2rem;

  &:hover {
    background-color: ${myTheme.color.button};
    cursor: pointer;
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
