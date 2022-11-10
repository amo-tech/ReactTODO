import { useState } from "react";
import { NodeBuilderFlags } from "typescript";
import "./styles.css";
import "./components/inputTodos";
import { InputTodo } from "./components/inputTodos";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTotos } from "./components/completeTodos";

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
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5}/>
      {incompleteTodos.length >= 5 && <p>Max number of todos!!!</p>}
      <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTotos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
}