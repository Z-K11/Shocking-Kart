import Home from './components/home/home.jsx';
import ErrorPage from './components/errorPage/errorPage.jsx';
import App from './app.jsx';
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
];
export default routes;
