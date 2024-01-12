import React from "react";
import stylles from "./../Dialogs.module.css";




const Message = (props) => {
    return (
        <div className={stylles.message}>
            {props.message}
        </div>
    )
}

export default Message;
