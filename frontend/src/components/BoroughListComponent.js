import React from 'react';
import axios from 'axios';

class BoroughList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boroughList: [],
        };
    }
    componentDidMount() {
        this.getBoroughs();
    }

    getBoroughs() {
        const API_URL = 'http://localhost:9000/api';
        const results = axios.get(`${API_URL}/boroughs`)
            .then((results) => {
                const { rows } = results.data;
                this.setState({
                    boroughList: rows
                })
            });
    }

    renderList() {
        const boroughList = this.state.boroughList;
        return (
            <ul className="list-group">
                {boroughList.map(row => (
                    <li className="list-group-item">{row.borough}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="col-md-4">
                <h2>Borough List</h2>
                {this.renderList()}
            </div>
        );
    }
}

export default BoroughList;
