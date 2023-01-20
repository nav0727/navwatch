import {Component} from 'react'

import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import NxtContext from './context/NxtContext'
import LoginForm from './components/LoginForm'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import VideoPlay from './components/VideoPlay'

class App extends Component {
  state = {isDark: false}

  toggleTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  render() {
    const {isDark} = this.state

    return (
      <NxtContext.Provider value={{isDark, toggleTheme: this.toggleTheme}}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute path="/videos/:id" component={VideoPlay} />
            <ProtectedRoute path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </NxtContext.Provider>
    )
  }
}

export default App
