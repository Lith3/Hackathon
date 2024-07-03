import styles from "./Asso.module.css";
import logoAsso from "../../assets/vielle.png";
import phone from "../../assets/phone.png";
import boxMail from "../../assets/boite.png";

function Asso() {
  const association = {
    name: "Association les copains des vieux",
    phone: "06 00 00 00 00",
    address: "2 rue du repos 69008 Lyon",
    description:
      "Ces braves gens vont t’aider à affronter l'internets vieille branche, ils sachent",
  };

  return (
    <>
      <div className={styles.assoContainer}>
        <img
          className={styles.logoAsso}
          src={logoAsso}
          alt="logo de l'association"
        />
        <h2 className={styles.name}>{association.name}</h2>
        <div className={styles.container}>
          <img
            src={phone}
            className={styles.phonePicture}
            alt="icone téléphone"
          ></img>
          <p> {association.phone}</p>
        </div>
        <div className={styles.container}>
          <img
            className={styles.boxMailPicture}
            src={boxMail}
            alt="icone de boite au lettre"
          ></img>
          <p className={styles.address}>{association.address}</p>
        </div>
        <div className={styles.descriptionBox}>
          <span className={styles.descriptionTitle}>Description :</span>
          <p className={styles.description}>{association.description}</p>
        </div>
      </div>
    </>
  );
}

export default Asso;
