import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Dashboard from './Dashboard'
import {connect} from 'react-redux'
import * as actions from './redux/actions'
import { useEffect} from 'react';
import LogIn from './shared/Login'
import SignUp from './shared/SignUp';
function App(props) {
  useEffect(() => {
    console.log(props)
    props.fetchUser()
  },[])

  return (
    <Router>
      <Switch>
        <Route path='/login' component={LogIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/dashboard/' component={Dashboard}/>
        <Route path='/' render={() => <Redirect to='/dashboard/' />}/> 
      </Switch>
    </Router>
  )
}
const mapStateToProps = (state) => ({auth:state.auth, mobileView:state.mobileView})

export default connect(mapStateToProps, actions)(App);
