import React from 'react';
import { connect } from 'react-redux';
import { addProperty } from '../../actions';
import SellerForm from './SellerForm';

class SellerCreate extends React.Component {

    onSubmit = (formValues, image) => {
        this.props.addProperty(formValues, image);
    }

    render() {
        return (
            <div>
                <SellerForm onSubmit={this.onSubmit} />

            </div>
        )
    }
}

export default connect(null, { addProperty })(SellerCreate);