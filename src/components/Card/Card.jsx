import React from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import s from "./Card.module.css";

function Card({ img, text, title }) {
  return (
    <div className={s.card}>
      <img
        src={img}
        alt={`${text} ${title}`}
        className={s.img}
        width="80"
        height="80"
      />
      <p className={s.text}>{text}</p>
      <p className={s.title}>{title}</p>
      <div className={s.iconContainer}>
        <FaEdit className={s.icon} />
        <HiTrash className={s.icon} />
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
