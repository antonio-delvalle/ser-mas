import React from "react";
import Img from "gatsby-image";

const Biography = ({ title, text, image }) => {
  return (
    <div className="md:flex">
      <div className="flex justify-center md:w-1/2">
        <div className="w-1/2">
          <Img
            className="rounded-full border-white border-8 rounded-full bg-white"
            fluid={image.fluid}
          />
        </div>
      </div>
      <div className="md:w-1/2">
        <h4 className="text-2xl font-bold my-4 text-center md:text-left">
          {title}
        </h4>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: text.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  );
};

export default Biography;
