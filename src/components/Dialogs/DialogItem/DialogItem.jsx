import React from "react";
import stylles from "./../Dialogs.module.css";
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={stylles.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;
