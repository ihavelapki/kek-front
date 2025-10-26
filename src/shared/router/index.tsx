import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Afisha from "../../pages/Afisha";
import FilmPage from "../../pages/FlimPage";
import BarGrill from "../../pages/BarGrill";
import RadioHome from "../../pages/RadioHome";
import LoginPage from "../../pages/LoginPage";
import SigninPage from "../../pages/SigninPage";

import { RequireAuth } from "../../entities/session/ui/RequireAuth";
import { RequireGuest } from "../../entities/session/ui/RequireGuest";


/**
 * Основной роутинг приложения.
 */
const KekRouter: React.FC = () => {
  return (
    <Routes>
      {/* базовая страница */}
      <Route path="/" element={<Home />} />

      {/* контекст Cinemahall */}
      <Route path="/cinema">
        <Route path="about" element={<About />} />
        <Route path="afisha" element={<RequireAuth><Afisha /></RequireAuth>}/>
        <Route path="afisha/:id" element={<RequireAuth><FilmPage /></RequireAuth>} />
        <Route path="bargrill" element={<RequireAuth><BarGrill /></RequireAuth>} />
        <Route path="login" element={<RequireGuest><LoginPage /></RequireGuest>} />
        <Route path="signin" element={<RequireGuest><SigninPage /></RequireGuest>} />
        <Route path="*" element={<Navigate to="about" replace />} />
      </Route>

      {/* контекст Radio */}
      <Route path="/radio">
        <Route index element={<RadioHome />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default KekRouter;
