import React from 'react';
import { Router } from 'react-router-dom';
import history from '../history'
import HomePage from '../pages/HomePage';

class App extends React.Component {


    render() {
        return (
            <Router history={history}>
                <div>
                    <HomePage />
                </div>
            </Router>
        )
    }
}

export default App;