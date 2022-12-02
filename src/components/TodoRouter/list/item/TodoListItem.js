import React from "react";
import{MdRemoveCircleOutline,MdCheckBox,MdCheckBoxOutlineBlank} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoLIstItem = ({ todo, onRemove,onToggle }) => {
    const {id,text, checked} = todo;
return(
    <div className="TodoListItem">
        <div className={cn('checkbox',{checked})} onClick={() => onToggle(id)}>
            {checked ? <MdCheckBox/>: <MdCheckBoxOutlineBlank/>}
            <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
            <MdRemoveCircleOutline/>
        </div>
    </div>
    );
};

export default TodoLIstItem;