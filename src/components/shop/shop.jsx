import { useOutletContext } from 'react-router';
const Shop = () => {
  const { products, error } = useOutletContext();
  console.log(products);
  return <div>Hey man</div>;
};
export default Shop;
