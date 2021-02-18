import React from "react"
import styled from "styled-components"
// import myTheme from "../../styles/myTheme"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  height: 95%;
  width: 90%;
`
//TODO
const ContactImage = ({ image }) => {
  return <StyledImage fluid={image} />
}

export default ContactImage
