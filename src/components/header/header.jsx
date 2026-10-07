import logo from '../../assets/Qstore_logo_head_only_download.svg';
import cart from '../../assets/cart.svg';
import styles from './header.module.css';
import { Link } from 'react-router';
const Header = () => {
  return (
    <header>
      <div className={styles.leftContent}>
        <img src={logo} alt="Qstore Logo" className={styles.logo} />
      </div>
      <div className={styles.rightContent}>
        <Link to="/" className={styles.headerLink}>
          Home
        </Link>
        <Link to="store" className={styles.headerLink}>
          Store
        </Link>
        <Link to="cart" className={styles.headerLink}>
          <img
            src={cart}
            alt="shopping cart logo"
            className={styles.cartLogo}
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
