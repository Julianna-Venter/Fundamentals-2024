import React from "react";

const Orange = (props:{
    fruit:string,
    children: React.ReactNode
}) => {
    const myStyle: React.CSSProperties = {
        backgroundColor: props.fruit.toLowerCase() === 'apple' ? 'darkred' : 'darkorange',
        color: 'whitesmoke',
    };

    return (
    <div style={myStyle}>
        Orange
    </div>
    );
}

export default Orange;