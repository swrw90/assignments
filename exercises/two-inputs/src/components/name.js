import React from "react";

class Name extends React.Component {
    render() {
        return (
            <div>
                <h3>Input Your Name</h3>
                <input value={this.props.input.firstname} placeholder="First Name" />
                <input value={this.props.input.lastname} placeholder="Last Name" />
                <button>Submit</button>
                <h1>{this.props.firstname}</h1>
                <h1>{this.props.lastname}</h1>
            </div>
        )
    }
}

export default Name;