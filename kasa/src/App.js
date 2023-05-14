import './App.css'
import Accueil from './components/page/accueil.js'
import Error from './components/page/notfound.js'
import About from './components/page/about.js'
import Logement from './components/page/logement.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {path : "/", element : <Accueil /> },
  {path :"*", element : <Error />},
  {path : "/about", element : <About />},
  {path : "/logement/:id", element : <Logement />}
]);

function app() {
  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default app
