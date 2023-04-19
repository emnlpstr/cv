import React, { useState, useContext } from "react";
import { ButtonStyle, ButtonLoginStyle } from "../style/Button.style";
import { Input } from "../Input/Input";
import { Backdrop } from "../style/Backdrop.style";
import { LoginWrapper } from "../style/LoginWrapper";
import { EditContext } from "../../context/editContext/editContext";

const LoginButton = () => {
  const [isOpened, setIsOpened] = useState(false);

  const closeHandler = () => {
    setIsOpened(false);
  };

  const { setEdit } = useContext(EditContext);

  return (
    <LoginWrapper>
      <ButtonLoginStyle onClick={() => setIsOpened(!isOpened)}>
        <svg
          className="icon"
          version="1.1"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M9 11.041v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"></path>
        </svg>
      </ButtonLoginStyle>
      {isOpened === true ? (
        <>
          <Backdrop onClick={() => closeHandler()} />
          <div className="user-form">
            <div className="user-form__wrapper">
              <Input id="username-login" placeholder="username" type="text" />
              <Input
                id="password-login"
                placeholder="Password"
                type="password"
              />
              <ButtonStyle onClick={() => setEdit(true)}>Login</ButtonStyle>
              <ButtonStyle onClick={() => setEdit(false)}>Logout</ButtonStyle>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </LoginWrapper>
  );
};

export default LoginButton;
