import { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Tutor from "components/Tutor";
import Button from "components/Button";
import Form from "components/Form";
import tutorForm from "db/tutorForm";
import s from "./TutorsList.module.css";
import Paper from "components/Paper";

class TutorsList extends Component {
  state = {
    tutors: this.props.tutors,
    isShown: false,
  };
  handleIsShown = () => {
    // this.setState((state) => ({ ...state, isShown: !state.isShown }));
    this.setState((state) => ({ isShown: !state.isShown }));
  };
  addTutor = (tutor) => {
    this.setState(({ tutors }) => ({ tutors: [...tutors, tutor] }));
  };

  render() {
    const { tutors, isShown } = this.state;
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
              <Form
                fields={tutorForm}
                add="Пригласить"
                handleSubmit={this.addTutor}
              />
            </Paper>
          </Fragment>
        )}
        <Button
          icon="plus"
          text="Добавить преподавателя"
          onClick={this.handleIsShown}
        />
      </Fragment>
    );
  }
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
