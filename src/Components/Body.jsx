import Navbar from "./Navbar";
import Science from "./Science";
import Accueil from "./Accueil";
import Login from "./Login";
import Arabe from "./Arabe";
import Français from "./Français";
import { Routes, Route, Navigate } from 'react-router-dom';


const Body = () => {
    return (
      <>
        <Navbar />
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
