import React, { Component } from 'react';
import TableForCsv from './table-for-csv';

class CsvUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tableheader: null, tabledata : null };
    }
    convert(event) {

        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];

            const formData = new FormData();
            formData.append('file', file, file.name);
            // this.loadTable(formData);
            this.fetchTable(formData);
        }

    }
    fetchTable(formData){

        fetch(`api/csv2json`, {
            method: 'POST',
            body: formData // This is your file object
        })
            .then(response => response.json())
            .then(result => {

                console.log(result);
                this.setState({tableheader: result.table.header, tabledata : result.table.lines});

            })
            .catch(
                error => console.log(error) // Handle the error response object
            );
    };

    render() {
        let Table = '';
        return (
            <div className="text-center mt-4" >

                <input className="btn btn-primary" type="file" name= "filetoupload" onChange={this.convert.bind(this)}/>
                <TableForCsv tableheader={this.state.tableheader} tabledata={this.state.tabledata}/>
            </div>
        )

    }
}

//
export default CsvUpload;