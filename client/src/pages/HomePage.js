import React from 'react';
import { Router } from 'react-router-dom';
import history from '../history'
import Card from '../components/Card'
import ButtonBases from '../components/ButtonBases'

class HomePage extends React.Component {


    render() {
        return (
            <Router history={history}>
                <div>
                    <Card />
                    <ButtonBases />
                </div>
            </Router>
        )
    }
}

export default HomePage;