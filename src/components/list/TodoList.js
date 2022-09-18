import React from "react";
import TodoLIstItem from "./item/TodoListItem";
import "./TodoList.scss"

const TodoList = ({ todos,onRemove,onToggle }) =>{
    return(
        <div className="TodoList">
            {todos.map(todo =>(
                <TodoLIstItem 
                todo={todo} 
                key ={todo.id} 
                onRemove={onRemove}
                onToggle={onToggle}
                />
            ))}
        </div>
    );
};


export default TodoList;