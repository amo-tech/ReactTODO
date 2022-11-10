import React from "react";

export const CompleteTotos = (props) => {
    const { todos, onClickBack } = props;
    return (
        <div className="complete-area">
            <p className="title ">完了のTODO</p>
            <ul>
                {todos.map((todos, index) => {
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
    );
};