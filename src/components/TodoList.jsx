import React from 'react';
import Item from './Item.jsx';


const TodoList = ({todos, loading, changeTodoStatus}) => {

    let todoList = <div>loading ...</div>;
    if(!loading) todoList = todos.map( (todo) => 
    <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus}/>)
    // console.log(todoList)
    return (
        <ul>
            {todoList}
        </ul>
    );
};

export default TodoList;