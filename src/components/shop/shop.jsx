import { useOutletContext } from 'react-router';
import styles from './shop.module.css';
const Shop = () => {
  const { products, error, setProducts } = useOutletContext();

  const handleIncrement = (e) => {
    console.log(e.target.className);
  };

  // handle direct keyboard input for item quantity
  const handleDirectChange = (e) => {
    const targetId = e.target.id;
    // convert target id from string to type integer
    const itemId = parseInt(targetId.slice(9, targetId.length), 10);
    // convert target value from string to type integer
    const value = parseInt(e.target.value, 10) || '';
    // set state for store products
    // works by calling the previous state modifying it and passing it as a new object
    setProducts((prev) =>
      prev.map((item) =>
        // if target id matches the product id set quantity = target value other wise return previous state of object unchanged
        item.id === itemId ? { ...item, quantity: value } : item
      )
    );
  };
  // If fetch request threw and Error show Error message on the page
  if (error) return <p>Error: {error.message}</p>;

  // If fetch did not throw and error and is currently fetching the data show Loading
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
              <label htmlFor={`quantity-${item.id}`}>Quantity: </label>
              <div className={styles.quantityRight}>
                <button>-</button>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={handleDirectChange}
                />
                <button onClick={handleIncrement}>+</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Shop;
