import React from "react"
import styled from "styled-components"
import myTheme from "../../styles/myTheme"

const StyledWrapper = styled.div``

const StyledLabel = styled.label``

const StyledInput = styled.input`
  /* display: flex; */
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

  &::placeholder {
    color: ${myTheme.color["blue-1"]};
  }
`

const StyledTextArea = styled.textarea``

const FormInput = ({ type, name, element, placeholder }) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name}>
        {element === "textarea" ? (
          <StyledTextArea
            name={name}
            id={name}
            rows="5"
            placeholder={placeholder}
            required={true}
          />
        ) : (
          <StyledInput
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            required={true}
          />
        )}
      </StyledLabel>
    </StyledWrapper>
  )
}

export default FormInput
