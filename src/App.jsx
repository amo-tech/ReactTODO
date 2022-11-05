import { useState } from "react";
import { NodeBuilderFlags } from "typescript";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "aaa",
    "bbb",
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "ccc",
  ]);

  const onChangeTodoText = () => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    alert(index);
  }

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title ">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li>
                <div key={todo} className="list-row">
                  <span>{todo}</span>
                  <button>完了</button>
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
          {completeTodos.map((todos) => {
            return (
              <li>
                <div key={todos} className="list-row">
                  <span>{todos}</span>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}