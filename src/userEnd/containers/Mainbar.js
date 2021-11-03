import {Switch, Route, Redirect} from 'react-router-dom'
import Browse from '../components/Browse';
import WatchList from '../components/WatchList';
import Liked from '../components/Liked';
import Settings from '../components/Settings';
function Mainbar()  {
    return (
      <Switch>
        <Route path='/dashboard/browse' component={Browse}/>
        <Route path='/dashboard/watchlist' component={WatchList} />
        <Route path='/dashboard/liked' component={Liked} />
        <Route path='/dashboard/settings' component={Settings} />
        <Route path='/dashboard' render={() => <Redirect to='/dashboard/browse' />}/> 
        <Route path='/dashboard/**' render={() => <Redirect to='/dashboard' />}/> 
      </Switch>
    )
  }
  export default Mainbar;
   