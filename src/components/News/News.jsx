import React from "react";
import New from './New/New'

const News = () => {
    return (
        <div>
            <New message='Новая новость' />
            <New message='Последняя новость' />
        </div>
    )
}
export default News;