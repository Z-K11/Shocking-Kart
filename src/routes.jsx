import Home from './components/home/home.jsx';
import ErrorPage from './components/errorPage/errorPage.jsx';
import Store from './components/shop/shop.jsx';
import App from './app.jsx';
import Checkout from './components/checkout/checkout.jsx';
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'store', element: <Store /> },
      { path: 'checkout', element: <Checkout /> },
    ],
  },
];
export default routes;
