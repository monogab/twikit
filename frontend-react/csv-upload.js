'use strict';

const e = React.createElement;

class CsvUploadComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

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
                onChange: () => this.setState({ liked: true }),
            })

        );
    }
}

//
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(CsvUploadComponent), domContainer);