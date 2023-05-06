import './App.css'
import Accueil from './components/page/accueil.js'
import Error from './components/page/notfound.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {path : "/", element : <Accueil /> },
  {path :"*", element : <Error />},
]);

function app() {
  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default app
