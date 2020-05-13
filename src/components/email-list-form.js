import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const EmailListForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email)
      .then((data) => {
        alert(data.result);
      })
      .catch((error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex w-full">
        <input
          placeholder="Correo electrónico"
          name="email"
          type="text"
          onChange={handleEmailChange}
          className="w-full focus:outline-none rounded-lg p-2 border-2 border-sermas-green-100"
        />
        <button
          className="hover:button-gradient-hover button-gradient ml-4 bg-sermas-green-300 py-2 px-4 rounded-lg text-white"
          type="submit"
        >
          Suscribirse
        </button>
      </div>
    </form>
  );
};

export default EmailListForm;
