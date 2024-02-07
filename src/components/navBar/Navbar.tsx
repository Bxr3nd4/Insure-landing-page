import "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <div className={styles.header}>
          <nav>
            <ul className={styles.list}>
              <li>
                <a href="/index.html">how we work</a>
              </li>
              <li>
                <a href="/buycards.html">blog</a>
              </li>
              <li>
                <a href="/ourblog.html">account</a>
              </li>
            </ul>
          </nav>
          <button className={styles.buttonNav}>view plans</button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
