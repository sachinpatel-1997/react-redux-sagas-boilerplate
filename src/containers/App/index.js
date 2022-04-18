import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { interceptor } from 'utils/interceptor'
import SqllabContainer from 'containers/SqlLab'
import ERDContainer from 'containers/ERD'


export default function App() {
  interceptor()
  return (
    <Fragment>
      <Switch>
        <Route exact path="/sqllab" component={SqllabContainer} />
        <Route exact path="/erd" component={ERDContainer} />        
      </Switch>
    </Fragment>
  )
}
