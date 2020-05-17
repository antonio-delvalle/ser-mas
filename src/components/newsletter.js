import React from "react";
import InlineCta from "./inline-cta";
import EmailListForm from "./email-list-form";

const Newsletter = ({
  newsletterText,
  newsletterTitle,
  remoteTitle,
  remoteText,
}) => {
  return (
    <div>
      <div className="lg:flex">
        <div className="lg:w-1/2 pb-8 lg:pb-0">
          <div className="lg:w-6/7">
            <h6 className="text-lg font-bold leading-tight mb-4">
              {newsletterTitle}
            </h6>
            <p className="mb-8">{newsletterText}</p>
            <EmailListForm />
          </div>
        </div>
        <div className="w-full lg:w-px h-px lg:h-full my-8 lg:my-0 lg:mr-16 lg:ml-8 bg-gray-500 lg:mx-4">
          &nbsp;
        </div>
        <div className="lg:w-1/2">
          <h6 className="text-lg font-bold leading-tight mb-4">
            {remoteTitle}
          </h6>
          <p className="mb-8 content">{remoteText}</p>
          <InlineCta
            url="#"
            text="Haz tu cita para una sesión individual remota"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
