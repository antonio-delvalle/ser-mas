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
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./nav-bar";
import "./../styles/layout.css";
import SocialProfile from "./social-profile";

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
  faExternalLinkAlt,
  faStar
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
          site: datoCmsSite {
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
          home: datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            copyright
          }
          footer: datoCmsFooter {
            copyrightNode {
              childMarkdownRemark {
                html
              }
            }
            links {
              id
              slug
              title
            }
          }
          socialProfiles: allDatoCmsSocialProfile(
            sort: { fields: [position], order: ASC }
            filter: { locale: { eq: "en" } }
          ) {
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
      render={({ site, home, footer, socialProfiles }) => {
        return (
          <div className="mx-auto">
            <HelmetDatoCms
              favicon={site.faviconMetaTags}
              seo={home.seoMetaTags}
            >
              <html lang="es" />
            </HelmetDatoCms>
            <Navbar
              toggleDrawer={() => makeToggleDrawer()}
              isExpanded={isExpanded}
            />
            {children}
            <footer className="bg-sermas-gray-200 p-16">
              <div className="md:flex text-white container mx-auto">
                <section className="md:w-1/2">
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: footer.copyrightNode.childMarkdownRemark.html,
                    }}
                  />
                </section>
                <section className="md:w-1/2">
                  <div className="flex mb-4">
                    {socialProfiles.edges.map(({ node: profile }) => (
                      <SocialProfile
                        key={profile.id}
                        type={profile.profileType}
                        url={profile.url}
                      />
                    ))}
                  </div>
                  <div>
                    {footer.links.map((link) => (
                      <Link key={link.id} to={link.slug}>
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </section>
              </div>
            </footer>
          </div>
        );
      }}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.array,
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
