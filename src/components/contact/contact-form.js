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
  }
  &:nth-child(2)::placeholder {
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
const ContactForm = ({ form }) => {
  const [isChecked, setChecked] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

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

  return (
    <StyledForm
      method="post"
      id="contact"
      onSubmit={() => validateEmail("submit", email)}
      accept-charset="UTF-8"
      action="https://livedemo.installatron.com/1613723424formtools/process.php"
    >
      <h2>{form.title}</h2>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form_tools_initialize_form" value="1" />
      <input type="hidden" name="form_tools_form_id" value="1" />
      <div>
        <StyledInput
          type={"text"}
          name={"fullName"}
          id={"fullName"}
          placeholder={form.placeholders.fullName}
          required={true}
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        <StyledInput
          type={"email"}
          name={"email"}
          id={"email"}
          placeholder={form.placeholders.email}
          required={true}
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="email"
        />
        <StyledInput
          type={"phone"}
          name={"phoneNumber"}
          id={"phoneNumber"}
          placeholder={form.placeholders.phoneNumber}
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
        <p>{form.agreement}</p>
      </StyledLabel>
      <StyledButton type="submit" disabled={!isChecked}>
        {form.buttonSendPL}
      </StyledButton>
    </StyledForm>
  )
}

export default ContactForm
