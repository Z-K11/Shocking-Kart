import { useOutletContext } from 'react-router';
import styles from './shop.module.css';
const Shop = () => {
  const { products, error } = useOutletContext();
  if (error) return <p>Error: {error.message}</p>;
  if (!products) return <p>Loading...</p>;
  console.log(products);
  return (
    <div className={styles.storeWrapper}>
      {products.map((item) => {
        return (
          <div className={styles.shopCard} key={item.title} data-id={item.id}>
            <div className={styles.imgWrapper}>
              <img src={item.image} alt={`Image of ${item.title}`} />
            </div>
            <p className={styles.title}>{item.title}</p>
            <p>Category: {item.category}</p>
            <p>{`Price: Rs ${parseInt(item.price)}`}</p>
            <p>Rating : {item.rating.rate}</p>
            <div className={styles.quantityInput}>
              <label htmlFor={`quantity +${item.id}`}>Quantity: </label>
              <div className={styles.quantityRight}>
                <button>-</button>
                <input type="number" id={`quantity +${item.id}`} />
                <button>+</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Shop;
