import Card from "components/Card";
import Paper from "components/Paper";
import IconText from "components/IconText";
// import { ReactComponent as Youtube } from "images/youtube.svg";
import university from "images/icons/University.png";
import text from "db/text";
import cat from "images/icons/cat.png";
import tutors from "db/tutors";
import s from "./Main.module.css";
import TutorsList from "components/TutorsList";

function Main() {
  return (
    <main className={s.container}>
      {/* <Youtube className={s.svg} /> */}
      <div className={s.wrapper}>
        <Paper>
          <Card img={university} text="университет" title="MIT" />
        </Paper>
        <Paper>
          <p className={s.text}>{text}</p>
        </Paper>
      </div>
      <div className={s.item}>
        <IconText
          data={{ url: cat, text: "преподаватели" }}
          capslock={true}
          gap="8px"
        />
      </div>
      <div className={s.marginTop}>
        <TutorsList tutors={tutors} />
      </div>
    </main>
  );
}

export default Main;
