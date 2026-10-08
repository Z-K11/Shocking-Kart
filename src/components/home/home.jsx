import styles from './home.module.css';
import heroImg from '../../assets/heroOwl.webp';
import FlashCards from '../homeFlashCard/flashCards';
const Home = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <img src={heroImg} alt="owl stuffed toy sitting on tree" />
        <h1>The Qutbudeen Store</h1>
      </div>
      <FlashCards />
    </>
  );
};
export default Home;
