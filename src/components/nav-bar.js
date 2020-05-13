import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div className="w-24 md-up:w-32">
          <Link to="/">
            <img
              alt="SER+"
              src="https://www.datocms-assets.com/27016/1588368481-artboard-3.png"
            />
          </Link>
        </div>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-3xl text-sermas-green-300"
        >
          <FontAwesomeIcon icon="bars" />
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex">
          <div>
            <Link className="font-bold" to="/servicios">
              Servicios
            </Link>
          </div>
          <div className="ml-8 font-bold">
            <Link to="/nosotros">Nosotros</Link>
          </div>
          <div className="ml-8 font-bold">
            <Link className="font-bold" to="/contacto">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
