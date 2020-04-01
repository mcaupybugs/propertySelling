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
    buyButton(propert) {
        return (
            <Link class="ui button">Buy</Link>
        )
    }

    renderList() {
        // console.log(this.props.property);
        return this.props.property.map(propert => {
            //console.log(propert.image);
            var string = "../../../../server/" + propert.image;
            var me = require(`../../../../server/${propert.image}`);
            //console.log(string);
            return (
                // <div className="ui card" key={propert._id}>
                //     <div className="image">
                //         <img src={me}></img>
                //     </div>
                //     <div className="content">
                //         <Link className="header" to={`/property/${propert._id}`}>
                //             {propert.City}
                //             {propert.State}
                //         </Link>
                //         <div className="description"><h4>Price = {propert.Price}</h4></div>
                //         {this.renderAdmin(propert)}{this.buyButton(propert)}
                //     </div>
                // </div >
                <div className="card">
                    <div className="image">
                        <img src={me}></img>
                    </div>
                    <div class="content">
                        <div class="header">{propert.City}</div>
                        <div class="meta">
                            <a>{propert.State}</a>
                        </div>
                        <div class="description">
                            $ {propert.Price}
                        </div>
                    </div>
                    <div class="extra content">
                        <span class="right floated">
                            {this.buyButton(propert)}
                        </span>
                        <span>
                            {this.renderAdmin(propert)}
                        </span>
                    </div>
                </div>

            )
        })
    }

    render() {
        return (
            <div className="ui container">

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