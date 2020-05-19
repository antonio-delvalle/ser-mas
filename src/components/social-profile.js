import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialProfile = ({ type, url }) => {
  return (
    <a className="block" href={url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        className="text-3xl text-sermas-green-300 mr-4"
        icon={["fab", type.toLowerCase()]}
      />
    </a>
  );
};

export default SocialProfile;
