import React, { useState } from "react";
import { EmailFormStyle } from "./EmailForm.style";
import { ButtonLoginStyle, ButtonStyle } from "../style/Button.style";
import { Input } from "../Input/Input";
import { Textarea } from "../Input/Textarea";
import { Backdrop } from "../style/Backdrop.style";

const emailBtn = {
  background: "rgb(142, 60, 33)",
  position: "fixed",
  right: "5%",
  top: "280px",
  borderRadius: "100%",
};

export const EmailForm = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <EmailFormStyle>
      <ButtonLoginStyle
        style={emailBtn}
        onClick={() => {
          setIsOpened(true);
        }}
      >
        <svg version="1.1" width="16" height="16" viewBox="0 0 16 16">
          <path
            fill="#ffffff"
            d="M13.333 0h-10.666c-1.467 0-2.667 1.2-2.667 2.667v10.666c0 1.468 1.2 2.667 2.667 2.667h10.666c1.467 0 2.667-1.199 2.667-2.667v-10.666c0-1.467-1.2-2.667-2.667-2.667zM13.333 2c0.125 0 0.243 0.036 0.344 0.099l-5.678 4.694-5.677-4.694c0.101-0.063 0.219-0.099 0.344-0.099h10.666zM2.667 14c-0.030 0-0.060-0.002-0.089-0.006l3.525-4.89-0.457-0.457-3.646 3.646v-9.549l6 7.256 6-7.256v9.549l-3.646-3.646-0.457 0.457 3.525 4.89c-0.029 0.004-0.059 0.006-0.088 0.006h-10.666z"
          ></path>
        </svg>
      </ButtonLoginStyle>
      {isOpened && (
        <Backdrop
          style={{ top: "95px", height: "100%" }}
          onClick={() => setIsOpened(false)}
        />
      )}
      {isOpened && (
        <form
          className="email-form"
          onSubmit={() => {
            alert("email inviata");
          }}
          id="email-form"
        >
          <ButtonLoginStyle
            className="btn-close"
            type="button"
            onClick={() => setIsOpened(false)}
          >
            <svg
              version="1.1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="#000000"
                d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"
              ></path>
            </svg>
          </ButtonLoginStyle>
          <Input id="mail-from" placeholder="From:" type="email"></Input>
          <Input
            id="mail-to"
            placeholder="To:"
            type="text"
            disabled={true}
            value="emanuelpistara@gamil.com"
          ></Input>
          <Input id="oggetto" placeholder="Object" type="text"></Input>
          <Textarea
            id="mail-content"
            placeholder="Text here your message!"
          ></Textarea>
          <ButtonStyle type="submit">Sumbit</ButtonStyle>
        </form>
      )}
    </EmailFormStyle>
  );
};
