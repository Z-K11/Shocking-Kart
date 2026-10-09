import { useOutletContext } from 'react-router';
import styles from './shop.module.css';
const Shop = () => {
  const { products, error } = useOutletContext();
  console.log(products);
  console.log(error);
  return (
    <div className={styles.storeWrapper}>
      {products.map((item) => {
        return (
          <div className={styles.shopCard} key={item.title}>
            <div className={styles.imgWrapper}>
              <img src={item.image} alt={`Image of ${item.title}`} />
            </div>
            <p className={styles.title}>{item.title}</p>
            <p>Category: {item.category}</p>
            <p>{`Price: Rs ${item.price}`}</p>
            <p>Rating : {item.rating.rate}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Shop;
