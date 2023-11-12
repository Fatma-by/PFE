export function Card(props) {
  return (
    <div className="cardList">
      <div key={props.id} className="MatiereCard">
        <img src={props.image} alt="Matiere-img" className="MatiereImage"></img>

        <div className="MatiereCard__content">
          <h3 className="MatiereName">{props.name}</h3>
          <div className="displayStack__1"></div>
        </div>
      </div>
    </div>
  );
}
