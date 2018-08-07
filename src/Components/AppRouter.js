import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Login = Loadable({
    loader: () => import('./Loginform'),
    loading: Loading,
});

const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loading,
});

const Fruit = Loadable({
    loader: () => import('./Fruit'),
    loading: Loading,
});

const Sweet = Loadable({
    loader: () => import('./Sweet'),
    loading: Loading,
});

const Vegetable = Loadable({
    loader: () => import('./Vegetable'),
    loading: Loading,
});

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route key={1} exact path="/" component = {Home}/> 
                <Route key={2} exact path="/login" component = {Login}/>
                <Route key={3} exact path="/fruit" component = {Fruit}/>
                <Route key={4} exact path="/sweet" component = {Sweet}/>
                <Route key={5} exact path="/vegetable" component = {Vegetable}/>
               
                </Switch>
            </Router>
        );
    }
}

  export default AppRouter;
