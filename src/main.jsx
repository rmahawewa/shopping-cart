import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import TopLayer from './components/TopLayer.jsx'
import About from './components/About.jsx';
import Store from './components/Store.jsx';

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
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
