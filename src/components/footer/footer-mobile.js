import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/my-theme"
import LogoNhi from "../logo/logo-nhi"
import { CgSmartphone, CgMail, CgArrowUp } from "react-icons/cg"
import { Link } from "gatsby"

const StyledFooterWrapper = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  background-color: #f8f8f8;
`

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledContactWrapper = styled.div`
  display: flex;
  margin: 1rem;
`
const StyledContactText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledText = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin: 0;
  padding: 0 8px;
`

const StyledLink = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  width: 48px;
  height: 48px;
  background-color: ${myTheme.color.button};
  text-decoration: none;
`

const FooterMobile = ({ number, email, company, copyrights }) => {
  return (
    <StyledFooterWrapper id="footer">
      <LogoNhi width="300px" />
      <StyledInfoWrapper>
        <StyledContactWrapper>
          <StyledContactText>
            <CgSmartphone color={myTheme.color["blue-4"]} size="24px" />
            <StyledText size={myTheme.typography["text-p"]}>
              {number}
            </StyledText>
          </StyledContactText>
          <StyledContactText>
            <CgMail color={myTheme.color["blue-4"]} size="24px" />
            <StyledText size={myTheme.typography["text-p"]}>{email}</StyledText>
          </StyledContactText>
        </StyledContactWrapper>
        <StyledText size={myTheme.typography["text-p3"]}>{company}</StyledText>
      </StyledInfoWrapper>
      <StyledText>
        &copy; {new Date().getFullYear()} {copyrights}
      </StyledText>
      <StyledLink to={`/`}>
        <CgArrowUp size={`24px`} color={`white`} />
      </StyledLink>
    </StyledFooterWrapper>
  )
}
export default FooterMobile
