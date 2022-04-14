import { Component } from "react";
import PropTypes from "prop-types";
import s from "./Form.module.css";
import Button from "components/Button";

class Form extends Component {
  static propTypes = {
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        ru: PropTypes.string,
        en: PropTypes.string,
      })
    ).isRequired,
    add: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
  };
  initialState = {};
  state = {};
  constructor({ fields }) {
    super();
    fields
      .map((field) => field.value)
      .forEach((e) => {
        this.initialState[e] = "";
      });
    this.state = { ...this.initialState };
  }
  onChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit({ ...this.state, options: "Some options" });
    this.setState({ ...this.initialState });
  };
  canSubmit = () => {
    return Object.values(this.state).every((item) => !!item);
  };

  render() {
    const { props, state, onSubmit, onChange, canSubmit } = this;
    const { fields, add } = props;
    return (
      <form className={s.form} onSubmit={onSubmit}>
        {fields.map(({ value, ru }) => {
          let type;
          switch (value) {
            case "email":
              type = "email";
              break;
            case "phone":
              type = "tel";
              break;
            default:
              type = "text";
          }
          return (
            <label key={value} className={s.label}>
              <input
                className={s.input}
                type={type}
                name={value}
                value={state[value]}
                placeholder=" "
                onChange={onChange}
              />
              <span className={s.text}>{ru}</span>
            </label>
          );
        })}
        <Button text={add} type="submit" disabled={!canSubmit()} />
      </form>
    );
  }
}

export default Form;
