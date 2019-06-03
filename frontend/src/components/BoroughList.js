import React from 'react';
import { connect } from 'react-redux';
import { fetchBoroughs, fetchBoroughData } from '../actions';

class BoroughList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectBorough: null,
        };
        this.selectBorough = this.selectBorough.bind(this);
    }
    componentDidMount() {
        this.props.fetchBoroughs();
    }

    selectBorough(event) {
        const borough = event.target.innerHTML;

        this.setState({
            selectBorough: borough
        }, () => {
            this.props.fetchBoroughData(borough);
        })
    }

    renderList() {
        const boroughs = this.props.boroughs.rows;

        if (!boroughs) {
            return false;
        }

        return (
            <ul className="list-group">
                {boroughs.map(row => (
                    <li className={"list-group-item" + (this.state.selectBorough === row.borough ? ' active' : '')}
                        key={row.borough}
                        onClick={this.selectBorough}
                    >
                        {row.borough}
                    </li>
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

const mapStateToProps = (state) => {
    const { boroughs } = state;
    return {
        boroughs
    }
}

export default connect(mapStateToProps, { fetchBoroughs, fetchBoroughData })(BoroughList);
