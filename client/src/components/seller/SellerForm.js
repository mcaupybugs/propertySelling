import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ImageUpload from '../ImageUpload';

class SellerForm extends React.Component {

    renderInput = (formProps) => {
        return (
            <div>
                <label>{formProps.label}</label>
                <input {...formProps.input} />
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="HouseNo" component={this.renderInput} label="Enter the address of the house" />
                <Field name="State" component={this.renderInput} label="Enter the state of the house" />
                <Field name="City" component={this.renderInput} label="Enter the city" />
                <Field name="Price" component={this.renderInput} label="Enter the selling price" />
                {/* <Field name="image" component={ImageUpload} label="Enter the image" /> */}
                <button>Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'PropertyCreate'
})(SellerForm);