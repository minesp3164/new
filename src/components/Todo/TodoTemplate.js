import React from "react";
import "./TodoTemplate.scss";
import FinishTemplate from "./Finish/FinishTemplate";

const TodoTemplate = ({children}) =>{
    return(
        <li>
            <div className="TodoTemplate">
                <div className="app-title">꼭 마무리 해야할 일</div>
                <div className="content">{children}</div>
            </div>
        </li>
    );
};

export default TodoTemplate;