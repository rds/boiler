import React, { ReactNode } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Entry, EntryProps } from './Entry'
import { RouteChildrenProps } from 'react-router'
import { Home } from './Home'

type EntryRouteProps = RouteChildrenProps<EntryProps>

export const App = () => {
  const renderEntry = ({ match }: EntryRouteProps): ReactNode => {
    return <Entry {...match.params} />
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/entry/:id" render={renderEntry} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}