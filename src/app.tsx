import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//Pages
import Login from './js/pages/login'
import Home from './js/pages/home'

//Components
import Header from './js/components/header'
import Navbar from './js/components/navbar'

import { myArray } from './js/pages/home'

class App extends React.Component {
  componentDidMount() {
    let userFromStorage = window.localStorage.getItem('user')
    console.log('user from local storage ', userFromStorage)

    window.localStorage.clear()
  }

  render() {
    return (
      <Router>
        <Header />
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <main className="main-wrapper">
          <Switch>
            <Route path="/login">
              <Login title="My super login page" isLoaded={false} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    )
  }
}

// L'export par défault de notre fichier app.tsx est la class App qui a été extends par React
// Mon app peut être désormais importé dans d'autres fichiers de mon projet
export default App
