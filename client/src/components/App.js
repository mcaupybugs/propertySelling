import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'
import HomePage from '../pages/HomePage';
import BuyerPage from '../pages/BuyerPage';
import SellerPage from '../pages/SellerPage';


class App extends React.Component {


    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/buyer" exact component={BuyerPage} />
                            <Route path="/seller" exact component={SellerPage} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;