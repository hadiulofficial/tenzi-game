import React, { useState } from 'react';
import Dice from './Dice';
import { nanoid } from 'nanoid'

const App = () => {
  const [dice, setDice] = useState(newDices())

  function newDices() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(
        {
          value: Math.ceil(Math.random() * 6),
          isHide: false,
          id: nanoid()
        }
      )
    }
    return newDice;
  }

  const rollDice = () => {
    setDice(newDices())
  }

  const diceElements = dice.map(dic => <Dice key={dic.id} value={dic.value} />)

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  );
};

export default App;