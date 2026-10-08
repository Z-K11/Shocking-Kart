import styles from './footer.module.css';
import { Link } from 'react-router';
const Footer = () => {
  return (
    <footer className={styles.footNote}>
      <div className={styles.leftContent}>
        <h3>Follow me!</h3>
        <a href="https://github.com/Z-K11">GitHub</a>
        <a href="https://www.facebook.com/profile.php?id=100089228738451">
          Facebook
        </a>
        <a href="https://www.instagram.com/thezk11/">Instagram</a>
        <a href="https://www.linkedin.com/in/zk11/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3ByZVxsb67SO6pJKntsYwbIQ%3D%3D">
          LinkedIn
        </a>
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
