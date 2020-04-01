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
                <div className="extra content">
                    <Link className="ui button primary" to={`seller/edit/${propert._id}`}>Edit</Link>
                    <Link className="ui button negative" to={`seller/delete/${propert._id}`}>Delete</Link>
                </div>
            )
        }
    }

    renderList() {
        // console.log(this.props.property);
        return this.props.property.map(propert => {
            //console.log(propert.image);
            var string = "../../../../server/" + propert.image;
            var me = require(`../../../../server/${propert.image}`);
            //console.log(string);
            return (
                <div className="ui card" key={propert._id}>
                    <div className="image">
                        <img src={me}></img>
                    </div>
                    <div className="content">
                        <Link className="header" to={`/property/${propert._id}`}>
                            <li>City = {propert.City}</li>
                            <li>state = {propert.State}</li>
                        </Link>
                        <div className="description">Price = {propert.Price}</div>
                        {this.renderAdmin(propert)}
                    </div>
                </div>

            )
        })
    }

    render() {
        return (
            <div className="ui container">
                <h2>Property</h2>
                <div className="ui link cards">{this.renderList()}</div>
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