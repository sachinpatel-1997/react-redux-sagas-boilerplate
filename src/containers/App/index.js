import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { interceptor } from 'utils/interceptor'
import SqllabContainer from 'containers/Sqllab'
import EdgesFlow from 'containers/EdgesFlow'
import ReactDBDgm from 'containers/ReactDBDgm'
import DbDiagram from 'containers/DbDiagram'
// import ReactDiagrams from 'containers/ReactDiagrams'
import GoJS from 'containers/Gojs'
import GoJsReact from 'containers/GoJsReact'


export default function App() {
  interceptor()
  return (
    <Fragment>
      <Switch>
        <Route exact path="/sqllab" component={SqllabContainer} />
        <Route exact path="/edge" component={EdgesFlow} />
        <Route exact path="/react-database-daigram" component={ReactDBDgm} />
        <Route exact path="/dbdaigram" component={DbDiagram} />
        <Route exact path="/gojs" component={GoJS} />
        <Route exact path="/goJsReact" component={GoJsReact} />
        {/* <Route exact path="/reactDiagrams" component={ReactDiagrams} /> */}
        
      </Switch>
    </Fragment>
  )
}
