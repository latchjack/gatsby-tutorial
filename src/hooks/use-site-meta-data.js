import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
