import { Outlet } from 'react-router';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import styles from './styles/app.module.css';
import { useEffect, useState } from 'react';
const App = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function getFakeData() {
      try {
        const data = await fetch(`https://fakestoreapi.com/products`, {
          signal: TaskController.singal,
        });
        if (!data.ok()) throw new Error(`Request failed ${data.status}`);
        const response = await data.json();
        setProducts(response);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err);
        return;
      }
    }
    getFakeData();
    return () => controller.abort();
  }, []);
  return (
    <>
      <Header />
      <main className={styles.runner}>
        <Outlet context={{ products, error }} />
      </main>
      <Footer />
    </>
  );
};
export default App;
