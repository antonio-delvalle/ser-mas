import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const EmailListForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email)
      .then((data) => {
        data.result === 'success' && alert("Suscrito con éxito");
      })
      .catch((error) => {
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex w-full flex-col md:flex-row">
        <input
          placeholder="Correo electrónico"
          name="email"
          type="text"
          onChange={handleEmailChange}
          className="w-full focus:outline-none rounded-lg p-2 border-2 border-sermas-green-100"
        />
        <button
          className="button-gradient mt-4 md:mt-0 md:ml-4 bg-sermas-green-300 py-2 px-4 rounded-lg text-white"
          type="submit"
        >
          Suscribirse
        </button>
      </div>
    </form>
  );
};

export default EmailListForm;
