import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="DogList">
                <h1 className="DogList-title display-1 text-center my-4">petbook</h1>
                <div className="row">
                    {this.props.dogs.map(d => {
                        return <div className="Dog col-lg-4 text-center" key={d.name}>
                            <img src={d.src} alt={d.name} />
                            <h3>
                                <Link className="underline" to={`/dogs/${d.name}`}>{d.name}</Link>
                            </h3>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default DogList;