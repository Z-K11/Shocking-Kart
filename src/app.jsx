import { Outlet } from 'react-router';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import styles from './styles/app.module.css';
const App = () => {
  return (
    <>
      <Header />
      <main className={styles.runner}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default App;
