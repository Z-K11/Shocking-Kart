import toyImg from '../../assets/toys.webp';
import stationary from '../../assets/stationary.webp';
import shirtImg from '../../assets/shirt.webp';
import styles from './flashCards.module.css';
const FlashCards = () => {
  return (
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
        <div className={styles.cardLeft}>
          <img src={toyImg} alt="img of lego toy bricks" />
          <div className={styles.cardText}>
            <h2>Toys</h2>
            <p>Any type of toy you want, we got it at the Qstore!</p>
          </div>
        </div>
        <div className={styles.cardRight}>
          <div className={styles.cardText}>
            <h2>Clothes</h2>
            <p>Qutdubeen Loves to dress up like a kid again!</p>
          </div>
          <img src={shirtImg} alt="casual shirt with printed design" />
        </div>
      </div>
    </div>
  );
};
export default FlashCards;
