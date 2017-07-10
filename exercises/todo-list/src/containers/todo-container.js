import React from "react";
import TodoList from "../components/todo-list.js";
import autoBind from "auto-bind";

class TodoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    name: "nap time",
                    value: ""
                },
                {
                    name: "cuddle puddle",
                    value: ""
                },
                {
                    name: "poop",
                    value: ""
                }],
            todoValue: ""
        }
        autoBind(this);
    }
    click() {
        this.setState({
            ...this.state,
            todos: [...this.state.todos, { name: this.state.todoValue, value: "" }],
            todoValue: ""
        });
    }
    updateItemValue(index, event) {
        let todos = [...this.state.todos];
        todos[index].value = event.target.value;
        this.setState({
            ...this.state,
            todos: todos
        });
    }

    save(index) {
        let todos = [...this.state.todos];
        todos[index].name = todos[index].value;
        this.setState({
            ...this.state,
            todos: todos
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
                <TodoList handleSave={this.save} handleUpdate={this.updateItemValue} todos={this.state.todos} handleRemove={this.remove} />
            </div>
        )
    }
}

export default TodoContainer;