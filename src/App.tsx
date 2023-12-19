import MainLayout from 'layout/mainLayout/MainLayout'
import Page404 from 'pages/Page404'
import Providers from 'providers'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from 'routes'

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <MainLayout />,
      //  404 page
      errorElement: <Page404 />,
      // child route components
      children: routes
    }
  ])
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}

export default App
