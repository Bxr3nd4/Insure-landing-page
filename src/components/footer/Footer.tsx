import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

function Footer() {
  return (
    <>
      <div className={styles.contentFooter}>
        <div className={styles.social}>
          <div className={styles.img}>
            <img src={logo} />
          </div>
          <div className={styles.socialMedia}>
            <img src={facebook} />
            <img src={twitter} />
            <img src={pinterest} />
            <img src={instagram} />
          </div>
        </div>
        <hr />
        <div className={styles.links}>
          <ul>
            <h2> Our company</h2>
            <li> How we work</li>
            <li>Why Insure?</li>
            <li>View plans</li>
            <li>Reviews</li>
          </ul>

          <ul>
            <h2>Help me</h2>
            <li>FAQ</li>
            <li>Terms of use</li>
            <li> Privacy policy</li>
            <li>Cookies</li>
          </ul>
          <ul>
            <h2>Contact</h2>
            <li>Sales</li>
            <li>Support</li>
            <li>Live chat</li>
          </ul>

          <ul>
            <h2>Others</h2>
            <li>Careers</li>
            <li>Press</li>
            <li>Licenses</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Footer;
