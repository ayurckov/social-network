import React from "react";
import stylles from './Settings.module.css';

const Settings = (props) => {
    return (
        <div className={stylles.settings}>
            <div className={stylles.setting}>Выбор темы</div>
            <div className={stylles.setting}>Отключить уведомления</div>

        </div>
    )
}

export default Settings;