import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.css";
import "./Accueil.css"


const Accueil = () => {
  return (
    <>
      <div className="accueil">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="public\image\child.jpg"className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="public\image\img2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="public\image\le-groupe-de-l-école.webp" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

<div className="description"> 
<h1 className="title">Bienvenue dans notre site " Ma Classe"</h1>
<p className="desc">Gérer votre classe et vos élèves en toute facilité.
<br></br>
  Télécharger gratuitement votre cours, devoirs et exercices.
</p>

</div>
<div>
<img src="public\image\1.png"className="interieur-class" alt="..." />
<h className="title-2">Créez la meilleure salle de classe possible</h>
<p className="desc-2">Des feuilles de présence aux minuteurs et tout ce qu’il y a entre les deux,<br></br> la boite à outils pour enseignants vous fera gagner du temps et de l’énergie <br></br>pour ce qui compte vraiment : aider les enfants à grandir 🌱.</p>
</div>

<div>

<img src="public\image\collection de cours.png"className="collection-cours" alt="..." />
</div>

    </>
  );
};

export default Accueil;
