import React from "react";

interface IStatusType{
    type: string;
}

const Button = ({type} : IStatusType) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
}

export default Button;
    