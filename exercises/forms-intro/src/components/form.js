import React from "react";

class Forms extends React.Component {
    genNames() {
        this.nameListItems = this.props.names.map((item, index) => {
            return (
                <li onClick={() => {
                    this.props.handleRemove(index)
                }} key={item + index}>
                    {item}
                </li>
            );
        });
    }

    render() {
        this.genNames();
        return (
            <div>
                <h1>{this.props.brand}</h1>
                <p>Name</p>
                <input value={this.props.nameValue} onChange={this.props.handleInput} />
                <button onClick={() => {
                    this.props.handleClick();
                }}>Submit</button>
                <ul>
                    {this.nameListItems}
                </ul>
            </div>
        )
    }
}

export default Forms;