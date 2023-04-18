import React, { useContext } from "react";
import { ProfilePictureWrapper } from "../style/ProfilePicture.style";
import { StaticImage } from "gatsby-plugin-image";
import { EditingContext } from "../../context/editingContext/editingContext";
import Dropzone, { useDropzone } from "react-dropzone";

export const ProfilePicture = ({}) => {
  const { editing } = useContext(EditingContext);

  return (
    <ProfilePictureWrapper>
      <StaticImage
        src="../../images/ep_cv_pic.jpg"
        alt="profile picture"
        placeholder="blurred"
        width={200}
        height={200}
      />
      {editing && (
        <Dropzone
          onDrop={(acceptedFiles) => {
            console.log(acceptedFiles);
          }}
        >
          {({ getRootProps, getInputProps }) => {
            <section {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </section>;
          }}
          ;
        </Dropzone>
      )}
    </ProfilePictureWrapper>
  );
};
