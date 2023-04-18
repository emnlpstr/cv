import React, { useContext } from "react";
import { ProfilePictureWrapper } from "../style/ProfilePicture.style";
import { StaticImage } from "gatsby-plugin-image";
import { EditingContext } from "../../context/editingContext/editingContext";
import { useDropzone } from "react-dropzone";

export const ProfilePicture = ({}) => {
  const { editing } = useContext(EditingContext);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <ProfilePictureWrapper>
      {!editing && (
        <div className="picture-frame">
          <StaticImage
            src="../../images/ep_cv_pic.jpg"
            alt="profile picture"
            placeholder="blurred"
            width={200}
            height={200}
          />
        </div>
      )}

      {editing && (
        <section className="">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop your picture here, or click to select one</p>
            <div>
              <ul style={{listStyle: "none"}}>{files}</ul>
            </div>
          </div>
        </section>
      )}
    </ProfilePictureWrapper>
  );
};
