import Home from './components/home/home.jsx';
import ErrorPage from './components/errorPage/errorPage.jsx';
const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];
export default routes;
