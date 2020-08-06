import React from "react";
import PropTypes from "prop-types";

export const Logo = React.memo(function Logo({alignRight}) {
  const linkStyle = `logo__link` + alignRight ? ` logo__link--light` : ``;

  return <div className="logo">
    <a className={linkStyle}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </a>
  </div>;
});

Logo.propTypes = {
  alignRight: PropTypes.bool,
};
