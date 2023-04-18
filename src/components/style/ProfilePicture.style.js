import styled from "styled-components";

export const ProfilePictureWrapper = styled.div`
  display: flex;

  .picture-frame {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: rgba(53, 20, 7, 0.1) 0px 0px 13px 3px;
  }

  .dropzone {
    border: 2px dashed rgba(255, 255, 255, 0.8);
    border-radius: 100%;
    padding: 22px;
    height: 100%;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
    }
  }
`;
