import Science from "./Matiere/Science";
import Accueil from "./Accueil/Accueil";
import Login from "./Login/Login";
import Arabe from "./Matiere/Arabe";
import Français from "./Matiere/Français";
import { Routes, Route, Navigate } from 'react-router-dom';


const Body = () => {
    return (
      <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/science" element={<Science />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/arabe" element={<Arabe />} />
          <Route path="/français" element={<Français />} />

          <Route path="/" element={<Navigate to="/accueil" />} />
          <Route path="*" element={<Navigate to="/accueil" />} />
        </Routes>
      </>
    );
  };

export default Body;
