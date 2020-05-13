import React from "react";
import EmailListForm from "./email-list-form";
import InlineCta from "./inline-cta";
import Img from "gatsby-image";

const MainHeader = ({ ctaLink, ctaText, image, title, subtitle, pretitle }) => {
  const displayPretitle = (pretitle) => <p>{pretitle}</p>;

  const displayTitle = (title) => (
    <h1 className="text-2xl md:text-6xl leading-tight mb-4 sm:home-hero">
      {title}
    </h1>
  );

  return (
    <div className="flex mx-8 sm:mx-0 pb-16 mt-16 sm:mt-0">
      <div className="sm:pt-32 sm:pb-24 sm:w-2/5">
        <div className="sm:pl-16">
          {pretitle && displayPretitle(pretitle)}
          {title && displayTitle(title)}
          <div>
            <p className="mb-8">{subtitle}</p>
            <EmailListForm />
            <hr className="h-px bg-gray-300 my-8" />

            <InlineCta url={ctaLink} text={ctaText} />
          </div>
        </div>
      </div>
      <div className="hidden sm:block md:top-0 sm:right-0 sm:w-3/5 z-neg">
        <Img fluid={image.fluid} />
      </div>
    </div>
  );
};

export default MainHeader;
