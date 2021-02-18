import React from "react"
import styled from "styled-components"
import { CgMenu, CgClose } from "react-icons/cg"
import myTheme from "../../styles/myTheme"

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  .opened {
    animation: fadeOut ease 0.35s;
  }

  .closed {
    animation: fadeIn ease 0.35s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
  @keyframes fadeOut {
    100% {
      opacity: 100;
    }
    0% {
      opacity: 0;
    }
  }
`

const MenuButton = ({ handleClick, isVisible }) => {
  return (
    <StyledButton
      onClick={() => handleClick()}
      className={isVisible ? "opened" : "closed"}
    >
      {isVisible ? (
        <CgClose size="24px" color={myTheme.color["blue-4"]} />
      ) : (
        <CgMenu size="24px" color={myTheme.color["blue-4"]} />
      )}
    </StyledButton>
  )
}

export default MenuButton
