'use strict';

const e = React.createElement;


class CsvUploadComponent extends React.Component {
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

        fetch(`http://localhost:3000/api/csv2json`, {
                method: 'POST',
                body: formData // This is your file object
             })
            .then(response => response.json())
            .then(
                result => {
                    console.log(result);
                    this.setState({tableheader: result.table.header, tabledata : result.table.lines});

            })
            .catch(
                error => console.log(error) // Handle the error response object
            );
    };

    render() {
        let Table = null;
        if (this.state.tableheader) {
            const TableTh = this.state.tableheader.map((item) => React.createElement("th", null, item));

            const TableCells = this.state.tabledata.map((line) => {
                return React.createElement("tr",
                    null,
                    line.map((cell) => React.createElement("td", null, cell)));
            })
            // Table = [TableTh,TableCells];
            Table = React.createElement(
                "div",
                { className: "container mt-4" },
                React.createElement(
                    "table",
                    { className: "table table-striped table-bordered table-hover" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement("tr", null, TableTh)
                    ),
                    React.createElement("tbody", null, TableCells)
                )
            );

        }

        return e(
            "div",
            { className: "text-center mt-4" },
            React.createElement("input", {
                className: "btn btn-primary",
                type: "file",
                name: "filetoupload",
                onChange: this.convert.bind(this),
            }),
            Table

        );
    }
}

//
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(CsvUploadComponent), domContainer);