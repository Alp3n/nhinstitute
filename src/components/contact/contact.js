import React from "react"
import styled from "styled-components"

import ContactForm from "./contact-form"
import ContactImage from "./contact-image"

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  justify-content: space-between;
`

const Contact = ({ form }) => {
  return (
    <StyledWrapper>
      <ContactImage />
      <ContactForm form={form} />
    </StyledWrapper>
  )
}

export default Contact
