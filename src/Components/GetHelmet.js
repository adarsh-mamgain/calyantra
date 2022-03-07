import React from "react";
import { Helmet } from "react-helmet";

export default function GetHelmet(props) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={"https://calyantra.com" + props.url} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:image"
        content="https://calyantra.com/static/illustration.svg"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={"https://calyantra.com" + props.url}
      />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta
        property="twitter:image"
        content="https://calyantra.com/static/illustration.svg"
      />
    </Helmet>
  );
}
