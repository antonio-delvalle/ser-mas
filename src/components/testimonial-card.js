import React from "react";

const TestimonialCard = ({ name, text }) => {
  return (
    <div className="md:px-8">
      <div className="w-3/4 md:w-full mx-auto shadow-2xl rounded-lg bg-white mx-8 my-16">
        <div className="p-8">
          <h6 className="text-2xl font-bold leading-tight mb-4">{name}</h6>
          <p className="mb-4">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
