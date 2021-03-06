import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/my-theme"
import { CgSmartphone, CgMail } from "react-icons/cg"
import LogoNhi from "../logo/logo-nhi"

const StyledFooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 0;
  background-color: #f8f8f8;
`

const StyledContent = styled.div`
  width: 70%;
`
const StyledInfoWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
`

const StyledContactWrapper = styled.div`
  flex-direction: column;
  margin-right: 5rem;
`
const StyledContactText = styled.div`
  display: flex;
  align-items: center;
`
const StyledText = styled.p`
  padding-left: 1rem;
  margin: 0;
`

const FooterDesktop = ({ number, email, company, copyrights }) => {
  return (
    <StyledFooterWrapper id="footer">
      <StyledContent>
        <LogoNhi width="400px" />
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
              <StyledText size={myTheme.typography["text-p"]}>
                {email}
              </StyledText>
            </StyledContactText>
          </StyledContactWrapper>
          <StyledText size={myTheme.typography["text-p3"]}>
            {company}
          </StyledText>
        </StyledInfoWrapper>
        <p>
          &copy; {new Date().getFullYear()} {copyrights}
        </p>
      </StyledContent>
    </StyledFooterWrapper>
  )
}
export default FooterDesktop
