import IconText from "components/IconText";
import PropTypes from "prop-types";
import Paper from "components/Paper";
import mobile from "images/icons/device-mobile.svg";
import mail from "images/icons/mail.svg";
import map from "images/icons/location-marker.svg";
import s from "./Tutor.module.css";

function Tutor({ tutor }) {
  const { firstName, lastName, patronymic, phone, email, city, options } =
    tutor;
  return (
    <Paper width="100%">
      <div className={s.main}>
        <ul className={s.name}>
          <li>{firstName}</li>
          <li>{lastName}</li>
          <li>{patronymic}</li>
        </ul>
        <div className={s.contacts}>
          <IconText data={{ url: mobile, text: phone }} gap="8px" />
          <IconText data={{ url: mail, text: email }} gap="8px" />
          <IconText data={{ url: map, text: city }} gap="8px" />
        </div>
        <p>{options}</p>
      </div>
    </Paper>
  );
}

Tutor.propTypes = {
  tutor: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    patronymic: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    options: PropTypes.string,
  }).isRequired,
};

export default Tutor;
