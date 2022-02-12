import React, { useState, useEffect } from 'react';
import Dice from './Dice';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

const App = () => {
  const [dice, setDice] = useState(newDices())
  const [tenzi, setTenzi] = React.useState(false)
  /**
 * Challenge: Check the dice array for these winning conditions:
 * 1. All dice are held, and
 * 2. all dice have the same value
 * 
 * If both conditions are true, set `tenzies` to true and log
 * "You won!" to the console
 */

    
    useEffect(() => {
      const allHeld = dice.every(dic => dic.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(dic => dic.value === firstValue)
      if(allHeld && allSameValue){
        setTenzi(true)
        console.log("sabbash BEte!")
      }
      
    }, [dice])


  function generateNewDice() {
    const diceArray = ['🎲', '⭐', '👑', '🏡', '🎁', '⚡']
    return {
      // value: Math.ceil(Math.random() * 6),
      value: diceArray[Math.floor(Math.random() * diceArray.length)],
      isHeld: false,
      id: nanoid()
    }
  }

  function newDices() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice())
    }
    return newDice;
  }

  const rollDice = () => {
    if(!tenzi){
      setDice(prevDice => prevDice.map(dice => {
        return dice.isHeld ? dice : generateNewDice()
      }))
    } else {
      setTenzi(false)
      setDice(newDices)
    }
  }

  const holdDice = (id) => {
    setDice(prev => prev.map(dice => {
      return dice.id === id ?
        { ...dice, isHeld: !dice.isHeld } :
        dice
    }))
  }



  const diceElements = dice.map(dic => <Dice
    key={dic.id}
    holdDice={() => holdDice(dic.id)}
    isHeld={dic.isHeld}
    value={dic.value}
  />)

  return (
    <main>
      {tenzi && <Confetti />}
      <h1 className="title">Tenzi Game</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>{tenzi ? 'New Game' : 'Roll'}</button>
    </main>
  );
};

export default App;