import React from 'react';
import Header from '../components/Header';
import SellerForm from '../components/seller/SellerForm'

class SellerPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SellerForm />
            </div>
        )
    }
}

export default SellerPage;