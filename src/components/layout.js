/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React from "react";
import PropTypes from "prop-types";

import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleRight, faBars } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./nav-bar";
import "./layout.css";

library.add(faChevronCircleRight, faBars);

const TemplateWrapper = ({ children }) => {
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
          <Navbar siteTitle="Test" />
          {children}
          <footer className="bg-sermas-green-300 p-16">
            <div className="md:flex text-white container mx-auto">
              <section className="md:w-1/2">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      data.datoCmsFooter.copyrightNode.childMarkdownRemark.html,
                  }}
                />
              </section>
              <section className="md:w-1/2">&nbsp;</section>
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
