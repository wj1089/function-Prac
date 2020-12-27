import React, { useEffect, useState } from "react";
import TodoList from "./TodoList.jsx";
import useFetch from "./useFetch.js";
import Header from "./Header.jsx";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState();

  const loading = useFetch(setTodos, "http://localhost:8080/todos");

  const changeInput = (e) => {
    setNewTodos(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { 'title': newTodos, 'id': todos.length, 'status':'todo'}]);
  };

  const changeTodoStatus = (id) => {
    // debugger;
    const updateTodos = todos.map((todo) => {
      if (todo.id === +id) {
        if (todo.status === "done") todo.status = "todo";
        else todo.status = "done";
      }
      return todo;
    })
    console.log("updateTodos");
    console.log(updateTodos);
  }

  //렌더링 이후에 처리할수있는
  useEffect(() => {
    console.log("새로운 내용이 렌더링 됐네요.", todos);
  }, [todos]);

  return (
    <>
      <Header todos={todos} />
      <form action="">
        <input type="text" name="" onChange={changeInput} />

        <button onClick={addTodo}> 할일추가 </button>
      </form>
      <TodoList
        todos={todos}
        loading={loading}
        changeTodoStatus={changeTodoStatus}
      />
    </>
  );
};

export default Todos;
