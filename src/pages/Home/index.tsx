import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../../shared/context/appContext";
import classes from "./Home.module.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { setApp } = useAppContext();

  useEffect(() => {
    setApp("home");
  }, [setApp]);

  const goCinema = () => {
    setApp("cinema");
    navigate("/cinema");
  };

  const goRadio = () => {
    setApp("radio");
    navigate("/radio");
  };

  return (
    <div className={classes.home}>
      <h1 className={classes.title}>Выбери приложение</h1>

      <div className={classes.blocks}>
        <div className={classes.block} onClick={goCinema}>
          <h2>🎬 Cinemahall</h2>
          <p>Онлайн-кинотеатр и расписание фильмов</p>
        </div>

        <div className={classes.block} onClick={goRadio}>
          <h2>🎧 Radio Natashka</h2>
          <p>Слушай аудиокниги</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
