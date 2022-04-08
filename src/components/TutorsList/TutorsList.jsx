import React from "react";
import PropTypes from "prop-types";
import Tutor from "components/Tutor";
import s from "./TutorsList.module.css";

function TutorsList({ tutors }) {
  return (
    <ul className={s.list}>
      {tutors.map((tutor) => (
        <li key={tutor.email} className={s.item}>
          <Tutor tutor={tutor} />
        </li>
      ))}
    </ul>
  );
}

TutorsList.propTypes = {
  tutors: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      patronymic: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      city: PropTypes.string,
      options: PropTypes.string,
    })
  ),
};

export default TutorsList;
