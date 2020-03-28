import React from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';
import { Link } from 'react-router-dom';

class PropertyList extends React.Component {
    componentDidMount() {
        this.props.fetchProperties();
    }

    renderAdmin(propert) {
        if (propert.userId === this.props.currentUserId) {
            return (
                <div>
                    <Link to={`seller/edit/${propert._id}`}>Edit</Link>
                    <Link to={`seller/delete/${propert._id}`}>Delete</Link>
                </div>
            )
        }
    }

    renderList() {
        // console.log(this.props.property);
        return this.props.property.map(propert => {
            return (
                <div key={propert.id}>
                    <div>
                        <Link to={`/property/${propert.id}`}>
                            <li>City = {propert.City}</li>
                            <li>state = {propert.State}</li>
                        </Link>
                        <div>Price = {propert.Price}</div>
                        {this.renderAdmin(propert)}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Property</h2>
                <div>{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        property: Object.values(state.property),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchProperties })(PropertyList)