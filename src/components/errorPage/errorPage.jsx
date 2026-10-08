import logo from '../../assets/Qstore_logo.svg';
import styles from './errorPage.module.css';
import { Link } from 'react-router';
const ErrorPage = () => {
  return (
    <div className={styles.errorBody}>
      <img src={logo} alt="Store Logo" className={styles.errorLogo} />
      <div className={styles.message}>
        <p>
          Sadly the page you are looking for doesn't exist on this website. Do
          not worry friends Qutbudeen, can Take you back
        </p>
        <Link className={styles.errorLink} to="/">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
