import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import s from "./Form.module.css";
import Button from "components/Button";

function Form({ fields, add, handleSubmit }) {
  const initialState = useMemo(() => {
    const initialState = {};
    fields
      .map((field) => field.value)
      .forEach((e) => {
        initialState[e] = "";
      });
    return initialState;
  }, [fields]);
  const [state, setState] = useState(initialState);

  const onChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ ...state, options: "Some options" });
    setState({ ...initialState });
  };
  const canSubmit = () => {
    return Object.values(state).every((item) => !!item);
  };

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

Form.propTypes = {
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
export default Form;
