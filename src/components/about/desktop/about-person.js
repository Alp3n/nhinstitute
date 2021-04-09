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

const PersonTitles = styled.p`
  color: ${myTheme.color["blue-4"]};
  margin: 0;
  padding: 0;
  line-height: 1;
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

const AboutPerson = ({
  handlePerson,
  person,
  selectedPerson,
  img,
  more,
  //  isEn
}) => {
  return (
    <AboutWrapper>
      <AboutPersonWrapper className="person">
        <AboutPersonPortrait image={img} />
        <PersonName>{person.name}</PersonName>
        {person.titles.map(title => (
          <PersonTitles key={title}>{title}</PersonTitles>
        ))}
      </AboutPersonWrapper>
      {selectedPerson === null ? (
        <StyledButton onClick={() => handlePerson(person, img)}>
          {more}
        </StyledButton>
      ) : (
        <StyledButton
          onClick={() => handlePerson(null, null)}
          className="button"
        >
          <CgArrowLeft color="white" />
          {more}
        </StyledButton>
      )}
    </AboutWrapper>
  )
}

export default AboutPerson
