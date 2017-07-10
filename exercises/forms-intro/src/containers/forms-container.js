import React from "react";
import Forms from "../components/form.js";
import autoBind from "auto-bind";

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            names: ["Whatever", "Dongle"],
            nameValue: ""
        }
        autoBind(this);
    }
    input(event) {
        this.setState({
        ...this.state,
        nameValue: event.target.value
        });
    }
    click() {
        this.setState({
            ...this.state,
        names: [...this.state.names, this.state.nameValue],
        nameValue: ""
        });
    }
    remove(index) {
        let oldNames = [...this.state.names];
        oldNames.splice(index,1);
        this.setState({
            ...this.state,
            names: oldNames
        });
    }
    render() {
        return (
            <Forms nameValue={this.state.nameValue} handleInput={this.input} brand="Atom Sucks" names={this.state.names} handleClick={this.click}/>
        )
    }
}

export default FormContainer;