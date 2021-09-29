import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const dogLinks = this.props.dogs.map(dog => (
            <NavLink className="nav-link"
                aria-current="page"
                exact to={`/dogs/${dog.name}`}
                key={dog.name}
            >
                {dog.name}
            </NavLink>
        ))
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/dogs">petbook</Link>
                    <button className="navbar-toggler"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" exact to="/dogs">
                                Home
                            </NavLink>
                            {dogLinks}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;