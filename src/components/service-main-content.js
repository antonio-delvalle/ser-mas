import React from "react";
import Img from "gatsby-image";

const ServiceMainContent = ({ text, image }) => {
  return (
    <div className="md:flex">
      <div className="md:w-1/2">
        <div
          className="content md:mr-4 mb-4"
          dangerouslySetInnerHTML={{
            __html: text.childMarkdownRemark.html,
          }}
        />
      </div>
      <div className="md:w-1/2">
        <Img fluid={image.fluid} />
      </div>
    </div>
  );
};

export default ServiceMainContent;
