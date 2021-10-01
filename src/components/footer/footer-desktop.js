import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/my-theme"
import { CgSmartphone, CgMail } from "react-icons/cg"
import LogoNhi from "../logo/logo-nhi"

const StyledFooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 0;
  background-color: #e0e8f7;
  /* margin-top: 8rem; */
`

const StyledContent = styled.div`
  /* padding-left: 8%; */
  width: 55%;
  /* align-self: flex-end; */
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
  font-size: 1.2rem;
  padding-left: 1rem;
  margin: 0.5rem;
`

const StyledRow = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
`

const FooterDesktop = ({ number, email, company, copyrights }) => {
  return (
    <>
      <StyledFooterWrapper id="footer">
        <div style={{ width: "40%", marginRight: "8%" }}></div>
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
          </StyledInfoWrapper>
          <p>
            &copy; {new Date().getFullYear()} {copyrights}
          </p>
        </StyledContent>
      </StyledFooterWrapper>
      <StyledRow>
        <div style={{ width: "40%", marginRight: "7%" }}></div>
        <p size={myTheme.typography["text-p3"]}>{company}</p>
      </StyledRow>
    </>
  )
}
export default FooterDesktop
