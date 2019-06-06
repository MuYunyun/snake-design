import * as React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Layout from '../layout'

/** 组件介绍页 */
import about from './about'
/** 组件说明页展示路由 */
import components from './components'

interface RouterProps {
  key: string
  name: string
  path: string
  component: React.ComponentType
  isDevelopmenting?: boolean
}
function OneRoute(route: RouterProps) {
  return <Route key={route.key} path={route.path} component={route.component} />
}

export default function(props: any) {
  return (
    <Router>
      <Route
        path="/"
        children={params => {
          if (params.location.pathname === '/') {
            return <Redirect to="/guide/install" />
          }
          return (
            <Layout
              basicCList={components}
              aboutSnakeDesignList={about}
              renderType="web"
              {...props}
            >
              {components.map(OneRoute)}
              {about.map(OneRoute)}
            </Layout>
          )
        }}
      />
    </Router>
  )
}
