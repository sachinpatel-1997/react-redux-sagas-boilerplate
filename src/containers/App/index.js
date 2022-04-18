import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { interceptor } from 'utils/interceptor'
import SqllabContainer from 'containers/SqlLab'
import Home from 'containers/Home'

export default function App() {
  interceptor()
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sqllab" component={SqllabContainer} />
      </Switch>
    </Fragment>
  )
}
