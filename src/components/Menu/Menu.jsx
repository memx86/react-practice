import React from "react";
import PropTypes from "prop-types";
import s from "./Menu.module.css";

function Menu({ children }) {
  return <ul className={s.list}>{children}</ul>;
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
