import React from "react";
import ReactDOM from "react-dom";

// import components
import NameContainer from "./components/name-container.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <NameContainer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));