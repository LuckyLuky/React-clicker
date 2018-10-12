import React from 'react';

const houses = (props) => {
    const style = {
        marginTop : "54vh",
        position : "fixed",
    };

    const oneHouse = (key) => <img key={key} src="https://www.shareicon.net/download/2015/12/12/686421_home_512x512.png" alt="HOUSE" height="100" width="100"/>;

    const renderHouses = (amount) => {
        let result = [];
        let key = 0;
        for (let i = 0; i < amount; i++) {
            result.push(oneHouse(key));
            key++
        }
        return result;
    }

    return(
        <div style={style}>
            {renderHouses(props.amount)}
        </div>
    );
}   

export default houses;