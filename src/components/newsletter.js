import React from "react";

const Newsletter = ({
  newsletterText,
  newsletterTitle,
  remoteTitle,
  remoteText,
}) => {
  return (
    <div>
      <div className="md:flex">
        <div className="md:w-1/2 pb-8 md:pb-0">
          <div className="md:w-5/6">
            <h6 className="text-2xl font-bold leading-tight mb-4">
              {newsletterTitle}
            </h6>
            <p>{newsletterText}</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="md:w-5/6">
            <h6 className="text-2xl font-bold leading-tight mb-4">
              {remoteTitle}
            </h6>
            <p>{remoteText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
