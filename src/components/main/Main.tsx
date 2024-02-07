import styles from "./Main.module.css";
import img1 from "../../assets/image-intro-mobile.jpg";
import snappy from "../../assets/icon-snappy-process.svg";
import affordable from "../../assets/icon-affordable-prices.svg";
import people from "../../assets/icon-people-first.svg";
import Card from "../card/Card";

function Main() {
  return (
    <>
      <div className={styles.banner}>
      <div className={styles.imgIntro}></div>
        <div className={styles.img}>
          <img src={img1} alt="" />
        </div>
        <div className={styles.content}>
          <hr/>
          <h1>
            Humanizing <br /> your insurance.
          </h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise <br /> and technology to help you find the plan that’s
            right for you. Ensure you <br />
            and your loved ones are protected.
          </p>
          <button className={styles.btn}>View plans</button>
        </div>
      </div>

      <div className={styles.planSection}>
        <hr/>
        <h1 className={styles.title}>We’re different</h1>
        <div className={styles.cards}>
          <Card
            img={snappy}
            title="Snappy Process"
            text="Our application process can be completed in minutes, not hours. Don’t get 
            stuck filling in tedious forms."
          />
          <Card
            img={affordable}
            title="Affordable Prices"
            text="We don’t want you worrying about high monthly costs. Our prices may be low, 
            but we still offer the best coverage possible."
          />
          <Card
            img={people}
            title="  People First"
            text="Our plans aren’t full of conditions and clauses to prevent payouts. We make 
            sure you’re covered when you need it."
          />
        </div> 
      </div>
    </>
  );
}

export default Main;
