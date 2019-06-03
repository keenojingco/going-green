import React from 'react';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';

class BoroughData extends React.Component {
    mapChartData() {
        const rows = this.props.boroughData.rows;
        const headers = ["Year", "Domestic", "Industrial and Commercial", "Total", "Transport"];
        let mappedData = [];
        let newRow = [];
        let currentYear = null;

        rows.forEach((row, index) => {
            if(index === rows.length -1) {
                mappedData.push(newRow);
            }

            if (index === 0) {
                currentYear = row.leggi_year;
                newRow.push(row.leggi_year.toString());
            }

            if (currentYear === row.leggi_year) {
                newRow.push(row.kt_co2e);
            }

            if (currentYear !== row.leggi_year) {
                mappedData.push(newRow);
                newRow = [];
                currentYear = row.leggi_year;
                newRow.push(row.leggi_year.toString());
                newRow.push(row.kt_co2e);
            }
        });
        mappedData.unshift(headers)
        return mappedData;
    }
    renderChart() {
        if (!this.props.boroughData.rows) {
            return false;
        }

        const data = this.mapChartData();
        const options = {
            chart: {
                title: 'Total Greenhouse Gas Emissions Trend per Year',
                subtitle: 'in CO2 emissions (kt)',
            }
        };

        return (
            <div className="my-chart">
                <Chart
                    width='100%'
                    height='400px'
                    chartType='Line'
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={options}
                />
            </div>
        )
    }

    renderTableData() {
        return (
            <tbody>
                {this.props.boroughData.rows.map(row => {
                    return (
                        <tr key={row._row_id}>
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

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">LEGGI Year</th>
                        <th scope="col">Sector</th>
                        <th scope="col">Fuel Type</th>
                        <th scope="col">CO2E(KT)</th>
                    </tr>
                </thead>
                {this.renderTableData()}
            </table>
        );
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12 mt-5">{this.renderChart()}</div>
                    <div className="col-md-12 mt-5">{this.renderTable()}</div>
                </div>
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
