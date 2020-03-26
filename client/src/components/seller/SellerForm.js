import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SellerForm extends React.Component {

    renderInput = (formProps) => {
        return (
            <div>
                <label>{formProps.label}</label>
                <input {...formProps.input} />
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field name="HouseNo" component={this.renderInput} label="Enter the address of the house" />
                <Field name="State" component={this.renderInput} label="Enter the state of the house" />
                <Field name="City" component={this.renderInput} label="Enter the city" />
                <Field name="Price" component={this.renderInput} label="Enter the selling price" />
            </form>
        )
    }
}

export default reduxForm()(SellerForm);