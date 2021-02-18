import React, { useState } from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const StyledHeading = styled.h2`
  font-weight: 400;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  place-self: center;
`
const StyledLabel = styled.div`
  font-size: ${myTheme.typography["text-p3"]};
  color: ${myTheme.color["blue-4"]};
  line-height: 150%;
  margin: 2% 0 5% 0;
  display: flex;
`
const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  text-indent: 2%;
  margin: 3% 0;
  font-size: ${myTheme.typography["text-p2"]};
  font-weight: 300;
  color: ${myTheme.color["blue-4"]};
  border: none;
  border-bottom: 1px solid ${myTheme.color["blue-4"]};

  &:focus {
    background-color: #e8e8e8;
    outline: none;
  }
  &.email {
    text-transform: lowercase;
  }
  &::placeholder {
    color: ${myTheme.color["blue-1"]};
    text-transform: capitalize;
  }
`
const StyledCheck = styled.input`
  margin: 3%;
`

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border: none;
  background-color: ${myTheme.color["blue-1"]};
  color: ${myTheme.color.white};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 2rem;

  &:hover {
    cursor: pointer;
    background-color: ${myTheme.color.button};
  }
  &:disabled {
    cursor: auto;
    background-color: grey;
  }
`
const ContactForm = () => {
  const [isChecked, setChecked] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  console.log(fullName)
  console.log(email)
  console.log(phone)

  function validateEmail(event, value) {
    let error
    if (!value) {
      error = "Wpisz email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Niewłaściwy e-mail"
    }
    event.preventDefault()

    return error
  }
  //TODO GET FORM
  return (
    <StyledForm
      method="post"
      name="contact"
      id="contact"
      onSubmit={() => validateEmail("submit", email)}
    >
      <StyledHeading>Wypełnij formularz, żeby wziąć udział:</StyledHeading>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <StyledInput
          type={"text"}
          name={"fullName"}
          id={"fullName"}
          placeholder={"Imię i nazwisko"}
          required={true}
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        <StyledInput
          type={"email"}
          name={"email"}
          id={"email"}
          placeholder={"E-mail"}
          required={true}
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="email"
        />
        <StyledInput
          type={"phone"}
          name={"phone"}
          id={"phone"}
          placeholder={"Telefon"}
          required={true}
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
      <StyledLabel>
        <StyledCheck
          type="checkbox"
          id="checkbox"
          name="checkbox"
          required={true}
          onChange={() => setChecked(!isChecked)}
        />
        <p>
          Wyrażam zgodę na wykorzystanie i przetwarzanie moich danych osobowych
          w celu realizacji zamówienia oraz kontaktu ze mną, wraz z przepisami
          rozporządzenia RODO o ochronie danych osobowych. Oświadczam, że
          zostałam(em) poinformowana(y) o przysługującym mi prawie dostępu do
          treści moich danych osobowych ich poprawiania oraz żądania usunięcia,
          jak również prawa do wycofania zgody w każdym czasie.
        </p>
      </StyledLabel>
      <StyledButton type="submit" disabled={!isChecked}>
        WYŚLIJ
      </StyledButton>
    </StyledForm>
  )
}

export default ContactForm
