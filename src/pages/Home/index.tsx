// src/pages/Home/index.tsx
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={classes.home}>
      <h1 className={classes.title}>Добро пожаловать в KEK Platform</h1>

      <div className={classes.blocks}>
        <div className={classes.block}>
          <h2>🎬 Перейти в приложение</h2>
          <p>Открой расписание фильмов и другие функции.</p>
          <Link to="/afisha" className={classes.link}>
            Открыть Afisha
          </Link>
        </div>

        <div className={classes.block}>
          <h2>ℹ️ О проекте</h2>
          <p>Узнай больше о платформе и команде разработчиков.</p>
          <Link to="/about" className={classes.link}>
            Читать подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
