import Card from "components/Card";
import Paper from "components/Paper";
import s from "./Main.module.css";
// import { ReactComponent as Youtube } from "images/youtube.svg";
import university from "images/University.png";

function Main() {
  return (
    <main className={s.container}>
      {/* <Youtube className={s.svg} /> */}
      <div className={s.wrapper}>
        <Paper width="144px">
          <Card img={university} text="университет" title="MIT" />
        </Paper>
        <Paper width="880px">
          <p className={s.text}>
            {
              "Опыт, концентрат знаний и возможность избежать большинство ошибок при приеме на работу. Мы знаем, что хотят большинство локальных и иностранных компаний и можем вам это дать. А еще мы постоянно совершенствуем наши курсы программирования, добавляя туда что-то новое. Вы можете лично ознакомиться с историями успеха наших выпускников, чтобы убедиться в эффективности нашей методики обучения. Да, мы начнем с азов и самой простой информации. Знаем, что большинство людей приходят к нам с нулевыми знаниями."
            }
          </p>
        </Paper>
      </div>
    </main>
  );
}

export default Main;
