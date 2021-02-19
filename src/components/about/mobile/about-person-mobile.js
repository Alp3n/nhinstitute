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
  grid-gap: 16px;
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
  font-weight: 400;
  text-transform: uppercase;
  font-size: 18px;
  line-height: normal;
`

const PersonTitles = styled.span`
  color: ${myTheme.color["blue-4"]};
  text-align: center;
  font-weight: 300;
  @media only screen and (max-width: 1200px) {
    font-size: 16px;
    line-height: normal;
  }
  @media only screen and (max-width: 700px) {
    width: 90%;
    font-size: 14px;
    line-height: normal;
  }
`
const StyledPersonWrapper = styled.div``

const AboutPerson = ({ setSelectedPerson, person, selectedPerson }) => {
  function handleOnClick(person) {
    setSelectedPerson(person)
  }

  return (
    <AboutWrapper>
      <AboutPersonWrapper className="person">
        <AboutPersonPortrait
          image={person.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <PersonName size="xsmall">{person.frontmatter.name}</PersonName>
        {selectedPerson === null ? (
          person.frontmatter.titles.length <= 3 ? (
            person.frontmatter.titles.map((title, index) => (
              <PersonTitles key={index}>{title}</PersonTitles>
            ))
          ) : (
            <PersonTitles>{`${person.frontmatter.titles}`}</PersonTitles>
          )
        ) : null}
      </AboutPersonWrapper>

      {selectedPerson === null ? (
        <ScrollArrow direction="-45deg" onClick={() => handleOnClick(person)} />
      ) : (
        <StyledPersonWrapper>
          <AboutPersonMoreMobile selectedPerson={selectedPerson} />
          <ScrollArrow direction="135deg" onClick={() => handleOnClick(null)} />
        </StyledPersonWrapper>
      )}
    </AboutWrapper>
  )
}

export default AboutPerson
