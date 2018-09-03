import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './Header';
import Profile from './Profile';
import ProductDetail from './ProductDetail'
import Index from './Public/Index'
import MenuCatalog from './Public/MenuCatalog';

const Loading = () => <div>Loading...</div>;

const Login = Loadable({
    loader: () => import('./Loginform'),
    loading: Loading,
});

const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loading,
});

const ABC = Loadable({
    loader: () => import('./ABC'),
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
const AccList = Loadable({
    loader: () => import('./AccList'),
    loading: Loading,
});

class AppRouter extends React.Component {
    constructor(_props){
        super(_props);
        //this.state = {date: new Date(),};
    }
    
    render() {
        let headerelement =[];
        //if (this.props.islogged === true){
            headerelement.push(<Header key={1} logged={true} onClick={this.props.onLogout} />);
        //}
        return (
            <div>
            
            {headerelement}
            <Router>
                <Switch>
                <Route key={1} exact path="/" component = {Home}/> 
                <Route key={9} exact path="/glasses A" component = {()=> (<Index type={1} />)}/>
                <Route key={10} exact path="/glasses B" component = {()=> (<Index type={2} />)}/>
                <Route key={11} exact path="/admin" component = {Index}/> 
                <Route key={2} exact path="/login" component = {Login}/>
                <Route key={3} exact path="/abc" component = {ABC}/>
                <Route key={4} exact path="/sweet" component = {Sweet}/>
                <Route key={5} exact path="/vegetable" component = {Vegetable}/>
                <Route key={6} exact path="/acclist" component = {AccList}/>
                <Route key={7} exact path="/profile" component = {Profile}/>
                <Route key={8} exact path="/productdetail" component = {ProductDetail}/>
               
                </Switch>
            </Router>
            
            </div>
        );
    }
}

  export default AppRouter;
