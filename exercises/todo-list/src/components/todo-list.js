import React from "react";
import TodoItem from "./todo-item.js";

class TodoList extends React.Component {
    genTodoItems() {
        // return array of todo items
        return this.props.todos.map((item, index) => {
            return (<TodoItem key={item + index} text={item} index={index} handleRemove={this.props.handleRemove} />);
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