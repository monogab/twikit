import React, { Component } from 'react';

class TableForCsv extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let Table = '';
        if (this.props.tableheader) {

            const TableTh = this.props.tableheader.map((item) => <th>{item}</th> );
            const TableCells = this.props.tabledata.map((line) =>  <tr>{line.map((cell) => <td>{cell}</td>)}</tr>);

            Table = <div className="container mt-4">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>{TableTh}</tr>
                    </thead>
                    <tbody>
                        {TableCells}
                    </tbody>
                </table>
            </div>
        }
        return Table;
    }
}
export default TableForCsv;