import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
import AboutPersonPortrait from "./AboutPersonPortrait"

import { CgArrowLeft } from "react-icons/cg"
import { useMediaQuery } from "react-responsive"

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
  @media only screen and (max-width: 700px) {
    font-size: 18px;
    line-height: normal;
  }
`

const PersonTitles = styled.span`
  font-size: ${myTheme.typography["text-p2"]};
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
//TODO BUTTON TO ARROW
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

  @media only screen and (max-width: 1200px) {
    width: 43vw;
  }

  @media only screen and (max-width: 1200px) {
    width: 43vw;
  }

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
  const isBigScreen = useMediaQuery({ query: "(min-width:1201px)" })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })

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
