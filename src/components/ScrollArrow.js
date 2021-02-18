import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../styles/myTheme"

const StyledScrollArrowWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
`

const StyledScrollArrow = styled(Link)`
  position: absolute;
  padding: 2rem; /* Arrow size */
  box-shadow: 1px -1px 0 1px ${myTheme.color["blue-1"]} inset;
  -webkit-box-shadow: 2px -2px ${myTheme.color["blue-1"]} inset;
  border: solid transparent;
  border-width: 2rem 2rem 2rem 2rem;
  transition: 0.2s;
  transform: rotate(${props => props.direction});

  :hover {
    box-shadow: 2px -2px 0 2px ${myTheme.color.button} inset;
    -webkit-box-shadow: 4px -4px ${myTheme.color.button} inset;
  }
`

const ScrollArrow = ({ href, direction }) => {
  return (
    <StyledScrollArrowWrapper>
      <StyledScrollArrow to={href} direction={direction} />
    </StyledScrollArrowWrapper>
  )
}

export default ScrollArrow
