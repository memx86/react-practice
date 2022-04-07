import React from "react";
import PropTypes from "prop-types";
import s from "./Paper.module.css";

function Paper({ children, width }) {
  return (
    <div className={s.paper} style={{ width }}>
      {children}
    </div>
  );
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
};

export default Paper;
