import React from "react";
import TodoList from "../components/todo-list.js";
import autoBind from "auto-bind";

class TodoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ["nap time", "cuddle puddle", "poop"],
            todoValue: ""
        }
        autoBind(this);
    }
    click() {
        this.setState({
            ...this.state,
            todos: [...this.state.todos, this.state.todoValue],
            todoValue: ""
        });
    }
    updateValue(event) {
        this.setState({
            ...this.state,
            todoValue: event.target.value
        });
    }
    remove(index) {
        let todos = [...this.state.todos];
        todos.splice(index, 1);
        this.setState({
            ...this.state,
            todos: todos
        });
    }
    keyPress(event) {
        if (event.key === "Enter") {
            this.click();
        }
    }
    render() {
        return (
            <div>
                <input value={this.state.todoValue} onKeyPress={this.keyPress} onChange={event => {
                    this.updateValue(event)
                }} />
                <button onClick={() => {
                    this.click();
                }} >Add Todo</button>
                <TodoList todos={this.state.todos} handleRemove={this.remove} />
            </div>
        )
    }
}

export default TodoContainer;