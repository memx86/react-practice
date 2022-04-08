import React from "react";
import PropTypes from "prop-types";
import s from "./IconText.module.css";

function IconText({ data, capslock, gap = "" }) {
  const { url, text } = data;
  return (
    <div className={`${s.item} ${capslock && s.capslock}`} style={{ gap }}>
      <img src={url} alt={text} width="24" height="24" className={s.img} />
      <p>{text}</p>
    </div>
  );
}

IconText.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  capslock: PropTypes.bool,
  gap: PropTypes.string,
};

export default IconText;
