import { HiPlusCircle } from "react-icons/hi";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const ICON = {
  PLUS: "plus",
};

function Button({
  icon,
  text,
  type = "button",
  onClick = () => {},
  disabled = false,
}) {
  return (
    <button type={type} onClick={onClick} className={s.btn} disabled={disabled}>
      {icon === ICON.PLUS && <HiPlusCircle className={s.icon} />}
      {text}
    </button>
  );
}
Button.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
