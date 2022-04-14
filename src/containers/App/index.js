import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { interceptor } from 'utils/interceptor'
import SqllabContainer from 'containers/SqlLab'

export default function App() {
  interceptor()
  return (
    <Fragment>
      <Switch>
        <Route exact path="/sqllab" component={SqllabContainer} />
      </Switch>
    </Fragment>
  )
}
