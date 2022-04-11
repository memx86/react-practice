import { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Tutor from "components/Tutor";
import Button from "components/Button";
import s from "./TutorsList.module.css";

class TutorsList extends Component {
  state = {
    tutors: this.props.tutors,
    isShown: false,
  };
  handleClick = () => {
    // this.setState((state) => ({ ...state, isShown: !state.isShown }));
    this.setState((state) => ({ isShown: !state.isShown }));
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
        <Button
          icon="plus"
          text="Добавить преподавателя"
          onClick={this.handleClick}
        />
        {isShown && <div>I am hidden!</div>}
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
