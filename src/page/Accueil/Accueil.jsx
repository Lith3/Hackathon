import "./Accueil.css";
import logoImage from "../../assets/vieudetour1.png";

function Accueil() {
  return (
    <main className="accueil">
      <div className="logo-container">
        <img className="logo" src={logoImage} alt="logo" />
        <h1>AIDE UN VIOQUE</h1>
      </div>
      <div className="button">
        <button className="button1" type="button">
          Associations
        </button>
        <button className="button2" type="button">
          Informations
        </button>
      </div>
    </main>
  );
}

export default Accueil;
