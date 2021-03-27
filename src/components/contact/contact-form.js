import React, { useState } from "react"
import styled from "styled-components"
import myTheme from "../../styles/my-theme"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  place-self: center;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
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
  color: ${myTheme.color["blue-4"]};
  border: none;
  border-bottom: 1px solid ${myTheme.color["blue-4"]};
  border-radius: 0;
  -webkit-appearance: none;

  &:focus {
    background-color: #e8e8e8;
    outline: none;
  }
  &.email {
    text-transform: lowercase;
  }
  &::placeholder {
    color: ${myTheme.color["blue-1"]};
  }
  &:nth-child(2)::placeholder {
    text-transform: capitalize;
  }
`
const StyledCheck = styled.input`
  margin: 1%;
  padding: 8px;
  border: 1px solid ${myTheme.color["blue-4"]};
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

const StyledH3 = styled.h3`
  font-weight: 400;
`

const ContactForm = ({ form }) => {
  const [isChecked, setChecked] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <StyledForm
      method="post"
      id="contact"
      accept-charset="UTF-8"
      action="https://formularze.nhinstitute.pl/formularze/process.php"
    >
      <StyledH3>{form.title}</StyledH3>
      <input type="hidden" name="form_tools_form_id" value="1" />
      <div>
        <StyledInput
          type="text"
          name="fullName"
          id="fullName"
          minLength="3"
          placeholder={form.placeholders.fullName}
          required={true}
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        <StyledInput
          type="email"
          name="email"
          id="email"
          minLength="6"
          placeholder={form.placeholders.email}
          required={true}
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="email"
          pattern=".+@.+\..+"
        />
        <StyledInput
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder={form.placeholders.phoneNumber}
          required={true}
          value={phone}
          onChange={e => setPhone(e.target.value)}
          minLength="9"
          pattern="^\+?[0-9]+"
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
        <p>{form.agreement}</p>
      </StyledLabel>
      <StyledButton type="submit" disabled={!isChecked}>
        {form.buttonSendPL}
      </StyledButton>
    </StyledForm>
  )
}

export default ContactForm
