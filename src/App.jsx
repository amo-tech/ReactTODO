import { useState } from "react";
import { NodeBuilderFlags } from "typescript";
import "./styles.css";
import "./components/inputTodos";
import { InputTodo } from "./components/inputTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "aaa",
    "bbb",
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "ccc",
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

const onClickBack = (index) => {
  const newCompleteTodos = [...completeTodos];
  newCompleteTodos.splice(index, 1);

  const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
  setIncompleteTodos(newIncompleteTodos);
  setCompleteTodos(newCompleteTodos);

};

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
      <div className="incomplete-area">
        <p className="title ">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={index}>
                <div className="list-row">
                  <span>{todo}</span>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title ">完了のTODO</p>
        <ul>
          {completeTodos.map((todos, index) => {
            return (
              <li key={index}>
                <div className="list-row">
                  <span>{todos}</span>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}