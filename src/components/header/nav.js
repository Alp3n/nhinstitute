import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../../styles/myTheme"

const links = [
  { href: "#about", name: "O NAS" },
  { href: "#products", name: "PRODUKTY" },
  { href: "#cooperation", name: "WSPÓŁPRACA" },
  { href: "#footer", name: "KONTAKT" },
]

const StyledList = styled.ul`
  margin: 0;
  line-height: 1.45rem;

  @media only screen and (min-width: 1201px) {
    display: flex;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  color: ${myTheme.color["blue-4"]};

  &:visited {
    color: ${myTheme.color["blue-4"]};
  }

  &:hover {
    color: ${myTheme.color.button};
  }
`

const StyledListPoint = styled.li`
  margin: 0;
  list-style: none;
  margin-left: 16px;
`

const Nav = props => {
  return (
    <nav>
      <StyledList {...props}>
        {links.map(link => (
          <StyledListPoint key={link.href}>
            <StyledLink to={link.href}>{link.name}</StyledLink>
          </StyledListPoint>
        ))}
      </StyledList>
    </nav>
  )
}

export default Nav
