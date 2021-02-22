import React from "react"
import styled from "styled-components"
import myTheme from "../../../styles/my-theme"
import { CgArrowLeft } from "react-icons/cg"
import AboutPersonPortrait from "../about-person-portrait"

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
`

const AboutPersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PersonName = styled.h2`
  margin: 5% 0;
  text-transform: uppercase;

  text-align: center;
`

const PersonTitles = styled.span`
  color: ${myTheme.color["blue-4"]};
  text-align: center;
`
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${myTheme.color["blue-1"]};
  color: ${myTheme.color["white"]};
  padding: 16px 0;
  font-size: 24px;
  font-family: "Lato";
  font-weight: 400;
  text-transform: uppercase;
  border: none;
  height: 60px;
  width: 60%;

  &:hover {
    background-color: ${myTheme.color.button};
    cursor: pointer;
  }

  &:focus {
    border: none;
    box-shadow: none;
  }
`

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
        <PersonName>{person.frontmatter.name}</PersonName>
        {person.frontmatter.titles.length <= 3 ? (
          person.frontmatter.titles.map((title, index) => (
            <PersonTitles key={index}>{title}</PersonTitles>
          ))
        ) : (
          <PersonTitles>{`${person.frontmatter.titles}`}</PersonTitles>
        )}
      </AboutPersonWrapper>
      {selectedPerson === null ? (
        <StyledButton onClick={() => handleOnClick(person)} className="button">
          więcej
        </StyledButton>
      ) : (
        <StyledButton onClick={() => handleOnClick(null)} className="button">
          <CgArrowLeft color="white" />
          mniej
        </StyledButton>
      )}
    </AboutWrapper>
  )
}

export default AboutPerson
