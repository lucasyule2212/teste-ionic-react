import HomeLayout from 'layout/homeLayout/HomeLayout'
import React from 'react'
import PathConstants from './pathConstants'

const Home = React.lazy(() => import('../pages/Home/Home'))

const routes = [
  {
    path: PathConstants.HOME,
    element: (
      <HomeLayout>
        <Home />
      </HomeLayout>
    )
  }
]

export default routes
