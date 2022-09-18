import React from "react";
import "./TodoTemplate.scss";
import FinishTemplate from "./Finish/FinishTemplate";

const TodoTemplate = ({children}) =>{
    return(
        <li>
            <div className="TodoTemplate">
                <div className="app-title">일정 관리</div>
                <div className="content">{children}</div>
            </div>
        </li>
    );
};

export default TodoTemplate;