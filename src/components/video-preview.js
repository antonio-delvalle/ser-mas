import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";

const VideoPreview = ({ image, url }) => {
  return (
    <div className="center-video-preview-container">
      <a target="_blank" rel="noopener noreferrer" href={url}>
        <FontAwesomeIcon className="center-video-preview text-12xl border-8 border-white z-10 bg-white rounded-full text-sermas-green-200" icon="play-circle" />
        <Img className="video-preview-image-opacity rounded-lg" fluid={image.fluid} />
      </a>
    </div>
  );
};

export default VideoPreview;
