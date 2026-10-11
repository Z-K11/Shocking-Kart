import styles from './checkout.module.css';
import logo from '../../assets/Qstore_logo_head_only_download.svg';
import { useOutletContext } from 'react-router';

const Checkout = () => {
  const { products, setProducts } = useOutletContext();
  const cartItems = products.filter((item) => item.inCart);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const handleItemAction = (e) => {
    const target = e.target.closest('button[data-action]');
    if (!target) return;
    const { action } = target.dataset;
    const targetId = parseInt(target.id.slice(2, target.id.length), 10);
    if (action === 'remove') {
      setProducts((prev) =>
        prev.map((item) =>
          item.id === targetId ? { ...item, quantity: '', inCart: false } : item
        )
      );
    }
  };
  if (!products)
    return (
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );
  return (
    <div className={styles.checkoutWrapper} onClick={handleItemAction}>
      <div className={styles.checkoutItems}>
        {cartItems.map((item) => {
          return (
            <div className={styles.itemCard} key={`${item.id}-checkout`}>
              <div className={styles.leftContent}>
                <p>{item.title}</p>
                <p>
                  Price : {item.price} x {item.quantity}
                </p>
                <p>Total : {item.price * item.quantity}</p>
                <button data-action="remove" id={`r-${item.id}`}>
                  Remove
                </button>
              </div>
              <div className={styles.rightContent}>
                <img src={item.image} alt={`Image of ${item.title}`} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.total}>
        <h1>Checkout</h1>
        <div className={styles.checkoutLogo}>
          <img src={logo} alt="store logo" />
        </div>
        <hr />
        <p>Total items: {cartItems.length}</p>
        <hr />
        <p>Cost: Rs {Math.floor(total)}</p>
        <hr />
        <p>Shipping : Rs 30</p>
        <hr />
        <p>Grand Total: {total > 0 ? total + 30 : 0}</p>
      </div>
    </div>
  );
};
export default Checkout;
