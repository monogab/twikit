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

    // this.http.post(`/api/csv2json`, formdata).subscribe(  (result) => {
    //
    //         if (result.table) {
    //
    //         }
    //
    //     });
    // }
    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            "div",
            { className: "text-center mt-4" },
            React.createElement("input", {
                className: "btn btn-primary",
                type: "file",
                name: "filetoupload",
                onChange: this.convert.bind(this),
            })

        );
    }
}

//
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(CsvUploadComponent), domContainer);