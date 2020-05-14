import React from "react";
import EmailListForm from "./email-list-form";
import InlineCta from "./inline-cta";
import Img from "gatsby-image";

const MainHeader = ({ ctaLink, ctaText, image, title, subtitle, pretitle }) => {
  const displayPretitle = (pretitle) => <p className="tracking-sermas mb-4">{pretitle}</p>;

  const displayTitle = (title) => (
    <h1 className="text-center md:text-left font-bold text-4xl lg:text-6xl md:font-normal leading-tight mb-4 home-hero">
      {title}
    </h1>
  );

  const displaySubtitle = subtitle => (
    <p className="text-center md:text-left mb-8">{subtitle}</p>
  );

  return (
    <div className="flex mx-8 md:mx-0 pb-16 mt-16 md:mt-0">
      <div className="w-full md:w-1/2 md:pt-16 lg:pt-32 lg:w-2/5">
        <div className="md:pl-16">
          {pretitle && displayPretitle(pretitle)}
          {title && displayTitle(title)}
          <div className="md:mr-4">
            {subtitle && displaySubtitle(subtitle)}
            <EmailListForm />
            <hr className="h-px bg-gray-300 my-8" />

            <InlineCta url={ctaLink} text={ctaText} />
          </div>
        </div>
      </div>
      <div className="hidden w-1/2 md:block md:top-0 md:right-0 lg:w-3/5 z-neg">
        <Img fluid={image.fluid} />
      </div>
    </div>
  );
};

export default MainHeader;
