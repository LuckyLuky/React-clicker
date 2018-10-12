import React from 'react';

const display = (props) => {
    const style = {
        backgroundColor : "dodgerblue",
        textAlign : "center",
        color : "white"
    };

    return(
        <div style={style}>{props.display}</div>
    );
}

export default display;