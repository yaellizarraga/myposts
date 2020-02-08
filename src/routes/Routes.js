import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Post from '../pages/Post/Post';
import Posts from '../pages/Posts/Posts';

const Routes = ( 
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post:id" component={Post} />
            <Route path="/posts" component={Posts} />
        </Switch>
    </Router>
)

export default Routes;
