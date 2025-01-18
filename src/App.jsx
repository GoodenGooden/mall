
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../ui/Home"
import User from "../feature/user/User"
import Mainitem from "../feature/main/Mainitem"
import Likeditem from "../feature/liked/Likeditem"
import ShoppedItem from "../feature/shopped/ShoppedItem"
import Emptycart from "../feature/empty/Emptycart"
import { loader as loaderItem } from "../services/loader"
import Emptyliked from "../feature/likedItems/Emptyliked"



const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/user',
    element: <User />
  },

  {
    path: '/main',
    element: <Mainitem />,
    loader: loaderItem,
    
  },

  {
    path: '/liked',
    element: <Likeditem />
  },

  {
    path: '/shopped',
    element: <ShoppedItem />
  },

  {
    path: '/empty',
    element: <Emptycart />
  },

  {
    path: '/likedItems',
    element: <Emptyliked />
  },


])

function App() {

  return   <RouterProvider router={router} />
 
}

export default App
