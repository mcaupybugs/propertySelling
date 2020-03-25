import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'
import HomePage from '../pages/HomePage';
import BuyerPage from '../pages/BuyerPage';


class App extends React.Component {


    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/buyer" exact component={BuyerPage} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;