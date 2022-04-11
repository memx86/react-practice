import PropTypes from "prop-types";
import { BiChevronLeft } from "react-icons/bi";

import s from "./IconButton.module.css";

const ICON = {
  LEFT: "circleLeft",
  PLUS: "plus",
};

function IconButton({ type = "button", icon = ICON.LEFT, onClick = () => {} }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${s.button} ${s.absolute}`}
    >
      {icon === ICON.LEFT && <BiChevronLeft className={s.icon} />}
    </button>
  );
}

IconButton.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
