import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InlineCta = ({ text, url }) => {
  return (
    <a className="font-bold" href={url}>{text} <FontAwesomeIcon icon="chevron-circle-right" /></a>
  );
};

export default InlineCta;
