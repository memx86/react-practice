import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Tutor from "components/Tutor";
import Button from "components/Button";
import Form from "components/Form";
import tutorForm from "db/tutorForm";
import s from "./TutorsList.module.css";
import Paper from "components/Paper";

function TutorsList(props) {
  const [tutors, setTutors] = useState(props.tutors);
  const [isShown, setIsShown] = useState(false);

  const handleIsShown = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };
  const addTutor = (tutor) => {
    setTutors((tutors) => [...tutors, tutor]);
  };

  return (
    <Fragment>
      <ul className={s.list}>
        {tutors.map((tutor) => (
          <li key={tutor.email} className={s.item}>
            <Tutor tutor={tutor} />
          </li>
        ))}
      </ul>
      {isShown && (
        <Fragment>
          <Paper>
            <Form fields={tutorForm} add="Пригласить" handleSubmit={addTutor} />
          </Paper>
        </Fragment>
      )}
      <Button
        icon="plus"
        text="Добавить преподавателя"
        onClick={handleIsShown}
      />
    </Fragment>
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
  ).isRequired,
};

export default TutorsList;
