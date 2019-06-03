import React from 'react';
import { connect } from 'react-redux';

class BoroughData extends React.Component {
    renderTableData() {
        return (
            <tbody>
                {this.props.boroughData.rows.map(row => {
                    return (
                        <tr key={row._row_id}>
                            <td>{row.data_year}</td>
                            <td>{row.leggi_year}</td>
                            <td>{row.sector}</td>
                            <td>{row.fuel}</td>
                            <td>{row.kt_co2e}</td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    renderTable() {
        if (!this.props.boroughData.rows) {
            return false;
        }
        console.log(this.props.boroughData.rows);
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Data Year</th>
                        <th scope="col">LEGGI Year</th>
                        <th scope="col">Sector</th>
                        <th scope="col">Fuel</th>
                        <th scope="col">CO2E(KT)</th>
                    </tr>
                </thead>
                {this.renderTableData()}
            </table>
        );
    }

    render() {
        return (
            <div className="col-md-8">
                <h2>Borough Data</h2>
                {this.renderTable()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { boroughData } = state;
    return {
        boroughData,
    }
}

export default connect(mapStateToProps, null)(BoroughData);


