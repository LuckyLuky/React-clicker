import React from 'react';

const style = {
    backgroundColor : "dodgerblue",
    textAlign : "center",
    color : "white"
};

const Display = (props) => (
    <div style={style}>{props.display}</div>
)

export default Display;