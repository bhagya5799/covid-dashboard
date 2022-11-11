import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import StateWiseCases from './components/StateWiseCases'
import Vaccination from './components/Vaccination'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/state/:stateCode" component={StateWiseCases} />
    <Route exact path="/vaccination" component={Vaccination} />
    <Route component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
