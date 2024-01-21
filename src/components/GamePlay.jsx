import React from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice'
import { useState } from 'react';
import { Button, OutlineButton } from '../style/button';
import Rules from './Rules';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(6);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max-min) + min);
  };

  const roleDice = ()=>{
    if(!selectedNumber){
      setError("You have not selected any number!")
      return;
    };

    setError("");
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev)=> randomNumber)

    if(selectedNumber === randomNumber)
      setScore((prev) => prev+ randomNumber);
    else
      setScore((prev) => prev - 1);
  };

  const resetScore= () =>{
    setScore(prev => 0);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score}/>
        <NumberSelector 
          error = {error}
          setError = {setError}
          selectedNumber={selectedNumber} 
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice
        currentDice = {currentDice}
        roleDice={roleDice}
      />
      <div className="buttons">
        <OutlineButton onClick={resetScore}>
          Reset Score
        </OutlineButton>
        <Button onClick={() => setShowRules(prev=> !prev)}>
          {
          showRules ? "Hide Rules": "Show Rules"}
        </Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay;


const MainContainer = styled.div`
  padding-top: 3.5vh;
  max-height: 100vh;

  .top-section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .buttons{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`