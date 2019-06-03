import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchBoroughs } from '../actions';

class BoroughList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boroughList: [],
        };
    }
    componentDidMount() {
        this.props.fetchBoroughs();
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
        const boroughs = this.props.boroughs.rows;

        if(!boroughs) {
            return false;
        }

        return (
            <ul className="list-group">
                {
                    boroughs.map(row => (
                        <li className="list-group-item" key={row.borough}>{row.borough}</li>
                    ))
                }
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

const mapStateToProps = (state) => {
    const { boroughs } = state;
    return {
        boroughs
    }
}

export default connect(mapStateToProps, { fetchBoroughs })(BoroughList);
