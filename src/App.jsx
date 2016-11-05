import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { IndexComponent, OtherComponent } from './components/page';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={IndexComponent} />
    <Route path="/other" component={OtherComponent} />
  </Router>,
  document.getElementById('app')
);
