import React from "react"
import styled from "styled-components"
import myTheme from "../../../styles/my-theme"
import AboutPersonPortrait from "../about-person-portrait"
import ScrollArrow from "../../scroll-arrow"
import AboutPersonMoreMobile from "./about-person-more-mobile"

const AboutWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: space-between;
  grid-template-areas: "person" "button";
  .person {
    grid-area: person;
  }
  .button {
    grid-area: button;
  }
  margin-bottom: 8%;
`

const AboutPersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PersonName = styled.h2`
  margin: 5% 0;
  text-transform: uppercase;
  font-size: 22px;
  line-height: normal;
`

const PersonTitles = styled.p`
  margin: 0;
  padding: 0;
  color: ${myTheme.color["blue-4"]};
  text-align: center;

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
    line-height: normal;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    line-height: 1;
    font-size: 14px;
    line-height: normal;
  }
`
const StyledPersonWrapper = styled.div``

const AboutPersonMobile = ({ handlePerson, person, selectedPerson, img }) => {
  return (
    <AboutWrapper>
      <AboutPersonWrapper className="person">
        <AboutPersonPortrait image={img} />
        <PersonName size="xsmall">{person.name}</PersonName>
        {selectedPerson === null
          ? person.titles.map(title => (
              <PersonTitles key={title}>{title}</PersonTitles>
            ))
          : null}
      </AboutPersonWrapper>

      {selectedPerson === null ? (
        <ScrollArrow direction="-45deg" onClick={() => handlePerson(person)} />
      ) : (
        <StyledPersonWrapper>
          <AboutPersonMoreMobile selectedPerson={selectedPerson} />
          <ScrollArrow direction="135deg" onClick={() => handlePerson(null)} />
        </StyledPersonWrapper>
      )}
    </AboutWrapper>
  )
}

export default AboutPersonMobile
