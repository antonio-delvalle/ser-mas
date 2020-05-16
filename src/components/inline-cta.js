import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

const InlineCta = ({ text, url, isInternal = false }) => {
  const displayLink = (url, text) => (
    <a className="font-bold" href={url}>
      {text} <FontAwesomeIcon icon="chevron-circle-right" />
    </a>
  );
  const displayHref = (url, text) => (
    <Link className="font-bold" to={url}>
      {text} <FontAwesomeIcon icon="chevron-circle-right" />
    </Link>
  );
  return isInternal ? displayHref(url, text) : displayLink(url, text);
};

export default InlineCta;
