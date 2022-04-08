import Card from "components/Card";
import Paper from "components/Paper";
import s from "./Main.module.css";
// import { ReactComponent as Youtube } from "images/youtube.svg";
import university from "images/University.png";
import text from "db/text";

function Main() {
  return (
    <main className={s.container}>
      {/* <Youtube className={s.svg} /> */}
      <div className={s.wrapper}>
        <Paper width="144px">
          <Card img={university} text="университет" title="MIT" />
        </Paper>
        <Paper width="880px">
          <p className={s.text}>{text}</p>
        </Paper>
      </div>
    </main>
  );
}

export default Main;
