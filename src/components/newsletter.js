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
      <div className="md:flex">
        <div className="md:w-1/2 pb-8 md:pb-0">
          <div className="md:w-5/6">
            <h6 className="text-lg font-bold leading-tight mb-4">
              {newsletterTitle}
            </h6>
            <p className="mb-8">{newsletterText}</p>
            <EmailListForm />
          </div>
        </div>
        <div className="w-0 md:w-px bg-gray-500 mx-4">&nbsp;</div>
        <div className="md:w-1/2">
          <div className="md:pl-8">
            <h6 className="text-lg font-bold leading-tight mb-4">
              {remoteTitle}
            </h6>
            <p className="mb-8">{remoteText}</p>
            <InlineCta
              url="#"
              text="Haz tu cita para una sesión individual remota"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
