import React, { useState } from "react";
import { ButtonStyle, ButtonLoginStyle } from "../style/Button.style";
import Input from "../Input/Input";
import { Backdrop } from "../style/Backdrop.style";

const LoginButton = () => {
  const [isOpened, setIsOpened] = useState(false);

  const buttonHandler = (event) => {
    console.log(event.target.tagName.toLowerCase());
    if (
      event.target.tagName.toLowerCase() === "button" ||
      event.target.tagName.toLowerCase() === "svg" ||
      event.target.tagName.toLowerCase() === "path"
    ) {
      setIsOpened(!isOpened);
    }
  };

  return (
    <ButtonLoginStyle
      onClick={(event) => {
        buttonHandler(event);
      }}
    >
      <svg
        className="icon"
        version="1.1"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path d="M9 11.041v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"></path>
      </svg>
      {isOpened && (
        <>
          <Backdrop/>
          <div className="user-form">
            <Input id="username-login" placeholder="username"></Input>
            <Input id="password-login" placeholder="Password"></Input>
            <ButtonStyle>Continue</ButtonStyle>
          </div>
        </>
      )}
    </ButtonLoginStyle>
  );
};

export default LoginButton;
