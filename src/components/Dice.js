import React from 'react';

const Dice = (props) => {
    return (
        <div className="dice-box">
            <h2 className="dice-num">{props.value}</h2>
        </div>
    );
};

export default Dice;