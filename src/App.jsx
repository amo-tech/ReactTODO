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
  const onClick = () => {
    if (todoText !== "") { // if(todoText === "") return どっちがいいのか
      const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    };
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClick}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title ">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li>
                <div key={todo} className="list-row">
                  <span>{todo}</span>
                  <button>完了</button>
                  <button>削除</button>
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