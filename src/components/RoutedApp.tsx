import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteProps,
  Switch,
} from 'react-router-dom';

import About from './About';
import Profile from './Profile';
import News from './News';

interface IAppProps extends RouteProps {
  name: string;
  site: string;
}

const App: React.FC<IAppProps> = props => {
  return (
    <div className="ref">
      <h1>Learn TypeScript</h1>
      <nav>
        <p>Навигация {props.name}</p>
        <Link to="/">Home</Link>
        <Link to="news">News</Link>
        <Link to="about">About</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <p>Отрисовка роуторов</p>
      {props.children}
    </div>
  );
};

const RoutedApp = () => {
  return (
    <Router>
      <Switch>
        <App path="/" name="Page 1" site="any.com">
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </App>
      </Switch>
    </Router>
  );
};

export default RoutedApp;
