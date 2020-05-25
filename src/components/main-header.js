import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const MainHeader = ({ ctaLink, image, title, subtitle, pretitle }) => {
  const displayPretitle = (pretitle) => (
    <h1 className="text-center md:text-left tracking-sermas mb-4">
      {pretitle.toUpperCase()}
    </h1>
  );

  const displayTitle = (title) => (
    <h2 className="text-center md:text-left font-bold text-4xl lg:text-6xl md:font-normal leading-tight mb-4 home-hero">
      {title}
    </h2>
  );

  const displaySubtitle = (subtitle) => (
    <p className="text-center md:text-left mb-8">{subtitle}</p>
  );

  return (
    <div className="flex mx-8 md:mx-0 pb-16 mt-16 md:mt-0">
      <div className="w-full md:w-1/2 md:pt-16 lg:pt-32 lg:w-2/5">
        <div className="md:pl-16">
          {pretitle && displayPretitle(pretitle)}
          {title && displayTitle(title)}
          <div className="md:mr-4">{subtitle && displaySubtitle(subtitle)}</div>

          <Link
            className="block text-center md:inline button-gradient mt-8 bg-sermas-green-300 py-3 px-8 rounded-lg text-white font-bold"
            to={ctaLink}
          >
            Haz tu cita
          </Link>
        </div>
      </div>
      <div className="hidden w-1/2 md:block md:top-0 md:right-0 lg:w-3/5 z-neg">
        <Img fluid={image.fluid} />
      </div>
    </div>
  );
};

export default MainHeader;
