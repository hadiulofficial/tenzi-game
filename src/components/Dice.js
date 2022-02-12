import React from 'react';

const Dice = ({holdDice, isHeld, value}) => {
    const styles = {
        backgroundColor: isHeld ? '#59E391' : 'white',
    }
    return (
        <div className="dice-box" onClick={holdDice} style={styles}>
            <h2 className="dice-num">{value}</h2>
        </div>
    );
};

export default Dice;