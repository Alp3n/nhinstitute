import React from "react"
import styled from "styled-components"
import myTheme from "../../../styles/my-theme"
import AboutPersonPortrait from "../about-person-portrait"

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5%;
  line-height: 35px;
`

const StyledInfoWrapper = styled.div`
  width: 55%;
  margin-left: 5%;
  color: ${myTheme.color["blue-4"]};
  font-weight: 300;
`
const AboutWrapper = styled.div`
  width: 40%;
  display: grid;
  place-self: start;

  grid-template-areas: "person" "button";
  .person {
    grid-area: person;
  }
`

const AboutPersonWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  /* align-items: center; */
`
const PersonName = styled.h2`
  position: relative;
  margin: 5% 0 5% 5%;
  font-weight: 400;
  text-transform: uppercase;
  /* text-align: center; */
  font-family: "Oswald", sans-serif;
  left: 15px;
`

const StyledInfo = styled.p`
  font-size: 24px;
  font-weight: 300;
  line-height: 40px;
`

const AboutPersonMore = ({ person, img }) => {
  return (
    <StyledWrapper className="aboutperson">
      <AboutWrapper>
        <AboutPersonWrapper className="person">
          <AboutPersonPortrait image={img} />
          <PersonName>{person.name}</PersonName>
        </AboutPersonWrapper>
      </AboutWrapper>
      <StyledInfoWrapper>
        {person.texts.map(text => (
          <StyledInfo className="info" key={text}>
            {text}
          </StyledInfo>
        ))}
      </StyledInfoWrapper>
    </StyledWrapper>
  )
}

export default AboutPersonMore
