import React from 'react';
import House from "./House";

const style = {
    marginTop : "54vh",
    position : "fixed",
};

const Houses = (props) => (
    <div style={style}>
        {Array(props.amount).fill(0).map((_, index) => (
            <House key={index} />
        ))}
    </div>
)

export default Houses;