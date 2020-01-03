import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import PostsList from '../Pages/PostsList';
import Comment from '../Pages/Comments';
const RootNavigation: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts-list" component={PostsList} />
        <Route path="/comments" component={Comment} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
};

export default RootNavigation;
