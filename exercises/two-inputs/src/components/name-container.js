import React from "react";
import autoBind from "react-autobind";
// import components
import Name from "../components/name.js";

class NameContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            firstname: "",
            lastname: "",
            input: {}
        };
    }
    handleInput(key, event) {
        let input = {
            ...this.state.input,
        };
        input[key] = event.target.value;
        this.setState({
            ...this.state,
            input: input
        });
    }
    render() {
        return (
            <div>
                <Name input={this.state.input} firstname={this.state.firstname} lastname={this.state.lastname} />
            </div>
        )
    }
}

export default NameContainer;