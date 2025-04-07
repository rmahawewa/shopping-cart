import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import TopLayer from './components/TopLayer.jsx'
import About from './components/About.jsx';
import Store from './components/Store.jsx';
import SingleView from './components/SingleView.jsx';
import Checkout from './components/Checkout.jsx';

/**
 * This code create routes. App element is the default route. TopLayer element has 4 child routes by names About, Store, SingleView, Checkout
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "toplayer",
    element: <TopLayer />,
    children:[
      {index: true, element: <About />},
      {path: "store", element: <Store />},
      {path: "single_view", element: <SingleView />},
      {path: "checkout", element: <Checkout />},
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
