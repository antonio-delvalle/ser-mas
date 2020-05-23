import React from "react";
import { Link } from "gatsby";
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
        <div className="lg:w-1/2">
          <h6 className="text-lg font-bold leading-tight mb-4">
            {remoteTitle}
          </h6>
          <p className="mb-8 content">{remoteText}</p>
          <Link
            className="block text-center md:inline button-gradient mt-8 bg-sermas-green-300 py-3 px-8 rounded-lg text-white font-bold"
            to="/contacto"
          >
            Haz tu cita
          </Link>
        </div>
        <div className="w-full lg:w-px h-px lg:h-auto my-8 lg:my-0 lg:mr-16 lg:ml-8 bg-gray-500 lg:mx-4">
          &nbsp;
        </div>

        <div className="lg:w-1/2 pb-8 lg:pb-0">
          <div className="lg:w-6/7">
            <h6 className="text-lg font-bold leading-tight mb-4">
              {newsletterTitle}
            </h6>
            <p className="mb-8">{newsletterText}</p>
            <EmailListForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
