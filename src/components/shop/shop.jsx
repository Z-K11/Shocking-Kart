import { useOutletContext } from 'react-router';
import styles from './shop.module.css';
const Shop = () => {
  const { products, error, setProducts } = useOutletContext();

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

  // function that handles item addition to cart , quantity increment and decrement by button
  const storeHandler = (e) => {
    const target = e.target.closest('button[data-action]');
    if (!target) return;
    const { action } = target.dataset;
    const targetId = parseInt(target.id.slice(2, target.id.length), 10);
    if (action === 'add') {
      setProducts((prev) =>
        // get products from the latest state
        prev.map((item) =>
          // find the one with matching id
          item.id === targetId
            ? {
                ...item,
                // copy all other properties using spread and overwrite quantity
                quantity: item.quantity === '' ? 1 : item.quantity + 1,
              }
            : // if item id doesn't match return the item as it is
              item
        )
      );
    } else if (action === 'subtract') {
      setProducts((prev) =>
        prev.map((item) =>
          item.id === targetId
            ? {
                ...item,
                quantity:
                  // if item quantity is an empty string or 0 set it to empty string otherwise decrement by 1
                  item.quantity === '' || item.quantity === 0
                    ? ''
                    : item.quantity - 1,
              }
            : item
        )
      );
    } else if (action === 'submit') {
      // find matching product and set it's inCart property to true
      setProducts((prev) =>
        prev.map((item) =>
          item.id === targetId && item.quantity >= 1
            ? { ...item, inCart: true }
            : item
        )
      );
    }
  };
  // If fetch request threw and Error show Error message on the page
  if (error) return <p>Error: {error.message}</p>;

  // If fetch did not throw and error and is currently fetching the data show Loading
  if (!products) return <p>Loading...</p>;
  console.log(products);
  return (
    <div className={styles.storeWrapper} onClick={storeHandler}>
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
                <button data-action="subtract" id={`s-${item.id}`}>
                  -
                </button>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={handleDirectChange}
                />
                <button data-action="add" id={`a-${item.id}`}>
                  +
                </button>
              </div>
            </div>
            {item.inCart ? (
              <button
                data-action="submit"
                id={`c-${item.id}`}
                className={styles.submitButton}
              >
                In cart
              </button>
            ) : (
              <button
                data-action="submit"
                id={`c-${item.id}`}
                className={styles.submitButton}
              >
                Add to cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Shop;
