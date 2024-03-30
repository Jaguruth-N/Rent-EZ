// import "./layout.scss"

import HomePage from "./routes/homePage/HomePage.jsx"
import Layout from "./routes/layout/Layout.jsx";
import ListPage from './routes/listPage/ListPage.jsx'
import SinglePage from "./routes/SinglePage/SinglePage.jsx";
import Login from "./routes/Login/Login.jsx";
import {
  createBrowserRouter,
  RouterProvider,

} from 'react-router-dom';
function App() {

  const router = createBrowserRouter([{
    path: "/",
    element:
      <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />

      },
      {
        path: '/list',
        element: <ListPage />
      },
      {
        path: '/:id',
        element: <SinglePage />
      },
      {
        path: '/:id',
        element: <Login />
      }
    ]

  },

  ]);
  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
    // </div>

    <RouterProvider router={router} />

  )
}

export default App