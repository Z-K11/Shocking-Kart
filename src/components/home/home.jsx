import styles from './home.module.css';
import heroImg from '../../assets/heroOwl.webp';
import stationary from '../../assets/stationary.webp';
const Home = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <img src={heroImg} alt="owl stuffed toy sitting on tree" />
        <h1>The Qutbudeen Store</h1>
      </div>
      <div className={styles.mainContent}>
        <h2>The store for all your childish needs</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.cardRight}>
            <div className={styles.cardText}>
              <h2>Stationary</h2>
              <p>All your colorful stationary in one place.</p>
            </div>
            <img src={stationary} alt="stationary items" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
