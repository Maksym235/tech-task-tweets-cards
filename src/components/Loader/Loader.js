import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#e1dff7"
    foregroundColor="#ebebeb"
    {...props}
  >
    <rect x="9" y="6" rx="13" ry="13" width="110" height="130" />
    <rect x="129" y="6" rx="13" ry="13" width="110" height="130" />
    <rect x="251" y="6" rx="13" ry="13" width="110" height="130" />
  </ContentLoader>
);

export default MyLoader;
