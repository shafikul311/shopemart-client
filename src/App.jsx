import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './layout/Layout'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import Shop from './pages/shop/Shop'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <>
        <p>404 page not found</p>
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ]
  }
])

function App () {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
