import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import Forms from "./components/form.js";
import FormContainer from "./containers/forms-container.js";

class App extends React.Component {
    render() {
        return (
            <view>

                <FormContainer />
            </view>

        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));