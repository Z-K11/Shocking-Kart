import styles from './footer.module.css';
import { Link } from 'react-router';
const Footer = () => {
  return (
    <footer className={styles.footNote}>
      <div className={styles.leftContent}>
        <h3>Follow me!</h3>
        <p>GitHub</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>LinkedIn</p>
      </div>
      <div className={styles.footSplitter}></div>
      <div className={styles.rightContent}>
        <h3>Useful Links</h3>
        <Link to="/">Home</Link>
        <Link to="store">Store</Link>
        <Link to="cart">Checkout</Link>
        <a href="https://www.theodinproject.com">Odin Project</a>
      </div>
    </footer>
  );
};
export default Footer;
