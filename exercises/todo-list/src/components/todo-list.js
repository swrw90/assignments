import React from "react";
import TodoItem from "./todo-item.js";

class TodoList extends React.Component {
    genTodoItems() {
        // return array of todo items
        return this.props.todos.map((item, index) => {
            return (<TodoItem handleSave={this.props.handleSave} handleUpdate={this.props.handleUpdate} nameValue={item.value} key={item.name + index} text={item.name} index={index} handleRemove={this.props.handleRemove} />);
        });
    }
    render() {
        return (
            <div>
                {this.genTodoItems()}
            </div>
        )
    }
}

export default TodoList;