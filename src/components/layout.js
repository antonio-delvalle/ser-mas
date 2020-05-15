/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronCircleRight,
  faBars,
  faChevronUp,
  faChevronDown,
  faPlayCircle,
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./nav-bar";
import "./../styles/layout.css";

library.add(
  fab,
  faChevronCircleRight,
  faBars,
  faChevronUp,
  faChevronDown,
  faPlayCircle,
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faExternalLinkAlt
);

const TemplateWrapper = ({ children }) => {
  const [isExpanded, toggleDrawer] = useState(false);

  const makeToggleDrawer = () => {
    toggleDrawer(!isExpanded);
    document.documentElement.classList.toggle("navigation-drawer-active");
  };

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
          datoCmsFooter {
            copyrightNode {
              childMarkdownRemark {
                html
              }
            }
            links {
              slug
              title
            }
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                id
                profileType
                url
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="mx-auto">
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <Navbar
            toggleDrawer={() => makeToggleDrawer()}
            isExpanded={isExpanded}
          />
          {children}
          <footer className="bg-sermas-gray-200 p-16">
            <div className="md:flex text-white container mx-auto">
              <section className="md:w-1/2">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      data.datoCmsFooter.copyrightNode.childMarkdownRemark.html,
                  }}
                />
              </section>
              <section className="md:w-1/2">
                {data.datoCmsFooter.links.map((link) => (
                  <Link to={link.slug}>{link.title}</Link>
                ))}
              </section>
            </div>
          </footer>
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.array,
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
