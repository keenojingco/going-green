import React from 'react';
import { connect } from 'react-redux';
import { fetchBoroughs, fetchBoroughData } from '../actions';

class BoroughList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBorough: '',
        };
        this.selectBoroughEvent = this.selectBoroughEvent.bind(this);
    }
    componentDidMount() {
        this.props.fetchBoroughs();
    }

    componentDidUpdate() {
        if(this.state.selectedBorough === '') {
            const borough = this.props.boroughs.rows[0].borough;
            this.selectBorough(borough);
        }
    }

    selectBorough(borough) {
        this.setState({
            selectedBorough: borough
        }, () => {
            this.props.fetchBoroughData(this.state.selectedBorough);
        })
    }

    selectBoroughEvent(event) {
        const borough = event.target.value;
        this.selectBorough(borough);
    }

    renderList() {
        const boroughs = this.props.boroughs.rows;

        if (!boroughs) {
            return false;
        }

        return (
            <select className="form-control form-control-lg"
                onChange={this.selectBoroughEvent}
            >
                {boroughs.map(row => (
                    <option key={row.borough} value={row.borough}>{row.borough}</option>
                ))}
            </select>
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
