import React from 'react';
import { connect } from 'react-redux';
import { fetchBoroughs, fetchFilteredBoroughData } from '../actions';

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
            this.props.fetchFilteredBoroughData(this.state.selectedBorough);
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
            <select className="form-control"
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
            <div className="col-md-12 mt-5">
                <div className="form-group row">
                    <label htmlFor="borough" className="col-sm-2 col-form-label">Select Borough: </label>
                    <div className="col-sm-10">
                        {this.renderList()}
                    </div>
                </div>
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

export default connect(mapStateToProps, { fetchBoroughs, fetchFilteredBoroughData })(BoroughList);
