import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import TaskManager from './pages/TaskManager';
import ProtectedRoute from './components/ProtectedRoute';

class App extends React.Component {
    render() {
        return (
            <HashRouter basename="/">
                <div>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <ProtectedRoute exact path="/task" component={TaskManager} />
                    <Route exact path="*" component={() => "404 NOT FOUND"} />
                  </Switch>
                </div>
            </HashRouter>
        )
    }
}
export default App
