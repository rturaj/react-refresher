
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetup from './pages/NewMeetup'
import Favorites from './pages/Favorites'
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
