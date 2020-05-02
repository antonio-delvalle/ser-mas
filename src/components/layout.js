/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "./layout.css";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
              fallbackSeo {
                image {
                  url
                  fluid(
                    maxWidth: 600
                    imgixParams: { fm: "jpg", auto: "compress" }
                  ) {
                    ...GatsbyDatoCmsSizes
                  }
                }
              }
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={`mx-auto ${showMenu ? "is-open" : ""}`}>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <nav className="md:w-4/5 md:my-8 mx-auto">
            <div className="flex justify-between">
              <div className="w-24 md-up:w-32">
                <Link to="/">
                  <img src="https://www.datocms-assets.com/27016/1588368481-artboard-3.png" />
                </Link>
              </div>
              <ul className="flex">
                <li>
                  <Link to="/servicios">Servicios</Link>
                </li>
                <li className="ml-8">
                  <Link to="/nosotros">Nosotros</Link>
                </li>
                <li className="ml-8">
                  <Link to="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>
          </nav>
          {children}
          <div>
            <p className="sidebar__social">
              {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
                <a
                  key={profile.profileType}
                  href={profile.url}
                  target="blank"
                  className={`social social--${profile.profileType.toLowerCase()}`}
                >
                  {" "}
                </a>
              ))}
            </p>
            <div className="sidebar__copyright">
              {data.datoCmsHome.copyright}
            </div>
          </div>
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
