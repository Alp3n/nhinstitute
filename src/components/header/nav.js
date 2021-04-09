import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import myTheme from "../../styles/my-theme"
import { useTranslation } from "react-i18next"

const StyledList = styled.ul`
  margin: 0;
  line-height: 1.45rem;

  @media only screen and (min-width: 1201px) {
    display: flex;
  }
  @media only screen and (max-width: 1200px) {
    line-height: 2rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: ${myTheme.color["blue-4"]};
  text-transform: uppercase;

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
  margin-left: 20px;
`

const Nav = () => {
  const { t } = useTranslation()
  return (
    <nav>
      <StyledList>
        {t("navbar.links").map(link => (
          <StyledListPoint key={link.href}>
            <StyledLink to={link.href}>{link.name}</StyledLink>
          </StyledListPoint>
        ))}
      </StyledList>
    </nav>
  )
}

export default Nav
