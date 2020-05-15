import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ toggleDrawer }) => {
  const onMenuHandler = (elementId) => {
    document.getElementById(elementId).classList.toggle("lg:block");
    document.getElementById(elementId).classList.toggle("lg:hidden");
  };

  return (
    <header id="header">
      <nav
        className="flex items-center justify-between p-3 lg:p-6 navigation"
        role="navigation"
      >
        <div className="flex items-center flex-shrink-0 text-white mx-6">
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
            onClick={() => toggleDrawer()}
            className="flex items-center px-3 py-2 text-3xl text-sermas-green-300"
          >
            <FontAwesomeIcon icon="bars" />
          </button>
        </div>

        <div className="main-navigation lg:justify-end lg:flex">
          <ul className="flex flex-col lg:flex-row">
            <li
              onMouseEnter={() => onMenuHandler("servicios-submenu")}
              onMouseLeave={() => onMenuHandler("servicios-submenu")}
              className="border-t lg:border-0"
            >
              <div className="font-bold p-4 block flex justify-between cursor-pointer items-center">
                <p>Servicios</p>
              </div>
              <ul
                id="servicios-submenu"
                className="ml-8 lg:ml-0 lg:hidden lg:absolute lg:bg-sermas-gray-100 lg:py-4 lg:rounded-lg lg:shadow-2xl lg:border"
              >
                <li className="border-t lg:border-0 lg:hover:bg-sermas-green-200">
                  <Link className="p-4 block" to="/servicio/fisioterapia" activeClassName="active">
                    Fisioterapia
                  </Link>
                </li>
                <li className="border-t lg:border-0 lg:hover:bg-sermas-green-200">
                  <Link className="p-4 block" to="/servicio/neurofeedback" activeClassName="active">
                    Neurofeedback
                  </Link>
                </li>
                <li className="border-t lg:border-0 lg:hover:bg-sermas-green-200">
                  <Link className="p-4 block" to="/servicio/constelaciones-vinculares" activeClassName="active">
                    Constelaciones vinculares
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sm:p-4 border-t border-b lg:border-0 button-nav">
              <Link className="p-4 sm:p-0 font-bold block" to="/nosotros" activeClassName="active">
                Nosotros
              </Link>
            </li>
            <li className="sm:p-4 border-b lg:border-0 button-nav">
              <Link className="p-4 sm:p-0 font-bold block" to="/contacto" activeClassName="active">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
