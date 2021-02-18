import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"
// import Heading from "../typography/Heading"
import FormInput from "./form-input"

//TODO clean form
const formStructure = [
  {
    type: "text",
    name: "fullName",
    placeholder: "Imię i nazwisko",
  },
  {
    type: "email",
    name: "email",
    placeholder: "E-mail",
  },
  {
    type: "phone",
    name: "phone",
    element: "text",
    placeholder: "Telefon",
  },
]

const StyledHeading = styled.h1`
  font-weight: 400;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledLabel = styled.label`
  text-align: justify;
  font-size: ${myTheme.typography["text-p3"]};
  color: ${myTheme.color["blue-4"]};
  line-height: 150%;
  margin: 2% 0 7% 0;
  font-family: "Lato";
  font-weight: 300;
`
const StyledCheck = styled.input`
  margin: 0 2% 0 0;
  width: 24px;
  height: 24px;
`

const StyledButton = styled.button``

const ContactForm = () => {
  return (
    <StyledForm
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      id="contact"
    >
      <StyledHeading size="xsmall">
        Wypełnij formularz, żeby wziąć udział:
      </StyledHeading>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      {formStructure.map(input => (
        <FormInput
          key={input.name}
          type={input.type}
          name={input.name}
          element={input.element}
          placeholder={input.placeholder}
        />
      ))}
      {/*TODO state and text*/}
      <StyledLabel>
        <StyledCheck
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value="true"
          required={true}
          className="checkBox"
        />
        Wyrażam zgodę na wykorzystanie i przetwarzanie moich danych osobowych w
        celu realizacji zamówienia, oraz przekazanie mojego adresu e-mail do
        Nutrition health Institute Sp. z.o.o. z siedzibą w Warszawie oraz
        przetwarzanie moich danych osobowych w celu wypełnienia ankiety oceny
        procesu składania zamówienia, ankiety oceny realizacji zamówienia oraz
        ankiety oceny produktu zgodnie z przepisami rozporządzenia RODO o
        ochronie danych osobowych. Oświadczam, że zostałam(em) poinformowana(y)
        o przysługującym mi prawie dostępu do treści moich danych osobowych ich
        poprawiania oraz żądania usunięcia, jak również prawa do wycofania zgody
        w każdym czasie.
      </StyledLabel>
      <StyledButton type="submit" text="wyślij" />
    </StyledForm>
  )
}

export default ContactForm
