import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialCard = ({ name, textNode }) => {
  return (
    <div className="md:px-8">
      <div className="w-3/4 md:w-full mx-auto shadow-2xl rounded-lg bg-white mx-8 my-16">
        <div className="p-8">
          <h6 className="text-2xl font-bold leading-tight mb-4">{name}</h6>
          <div
            className="mb-4 content"
            dangerouslySetInnerHTML={{
              __html: textNode.childMarkdownRemark.html,
            }}
          />
          <div className="flex">
            <FontAwesomeIcon icon="star" className="text-yellow-500" />
            <FontAwesomeIcon icon="star" className="text-yellow-500" />
            <FontAwesomeIcon icon="star" className="text-yellow-500" />
            <FontAwesomeIcon icon="star" className="text-yellow-500" />
            <FontAwesomeIcon icon="star" className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
