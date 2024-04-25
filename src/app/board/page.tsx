'use client'

import React, { useState } from 'react';
import Keyboard from './keyboard';
import Gameboard from './gameboard';
import Modal from './modalWinner';
import ModalLoser from './modalLoser';

const Board = ({ answer }) => {

  const [different, setDifferent] = useState<string[]>([]);
  const [same, setSame] = useState<string[]>([]);
  const [notInAnswer, setNotInAnswer] = useState<string[]>([]);
  const [changeColour, setChangeColor] = useState<string[]>(Array.from({ length: 30 }, () => 'none'));
  const [rows, setRows] = useState<(string | undefined)[]>(Array.from({ length: 30 }, () => undefined));
  const [userAttempts, setUserAttempts] = useState<number>(0);
  const [winner, setWinner] = useState<boolean>(false);

  const firstEmpty: number = rows.indexOf(undefined);
  let pressedKey: string;

  const handleKeyClick = (e: React.MouseEvent<HTMLButtonElement>) => {  
    if(
      firstEmpty === 5 && userAttempts === 0 ||
      firstEmpty === 10 && userAttempts === 1 ||
      firstEmpty === 15 && userAttempts === 2 ||
      firstEmpty === 20 && userAttempts === 3 ||
      firstEmpty === 25 && userAttempts === 4 ||
      firstEmpty === 30 && userAttempts === 5
      ) {
      return
    } else {
    
      let pressedKey: string = e.target.value;
      const newArray: (string | undefined)[] = [...rows];
      newArray[firstEmpty] = pressedKey
      setRows(newArray);
    }
    return (
      pressedKey
    )
  }

  const handleDelete = () => {

    if(
      firstEmpty === 5 && userAttempts >= 1 ||
      firstEmpty === 10 && userAttempts >= 2 ||
      firstEmpty === 15 && userAttempts >= 3 ||
      firstEmpty === 20 && userAttempts >= 4 ||
      firstEmpty === 25 && userAttempts >= 5 ||
      userAttempts >= 6
    ) {
      return
    } else {

    let lastStringIndex = rows.length - 1;
    while (lastStringIndex >= 0 && typeof rows[lastStringIndex] !== 'string') {
        lastStringIndex--;
    }

    // If there is a string in the rows array, replace it with undefined
    if (lastStringIndex >= 0) {
        const newArray = [...rows];
        newArray[lastStringIndex] = undefined; // Replace the string with undefined
        setRows(newArray);
    }
    }
  }
 
  const handleSubmit = () => {
    if (
      userAttempts === 6 || 
      firstEmpty != 5 &&
      firstEmpty != 10 &&
      firstEmpty != 15 &&
      firstEmpty != 20 &&
      firstEmpty != 25 &&
      rows.indexOf(undefined) != -1
    
    ) {
      return;
    } else {   
      const firstRow: (string | undefined)[] = rows.slice(0,5);
      const secondRow: (string | undefined)[] = rows.slice(5,10);
      const thirdRow: (string | undefined)[] = rows.slice(10,15);
      const fourthRow: (string | undefined)[] = rows.slice(15,20);
      const fifthRow: (string | undefined)[] = rows.slice(20,25);
      const sixthRow: (string | undefined)[] = rows.slice(25,30);
      const rowsArray: (string | undefined)[][] = [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow];
      const colourArray: string[] = Array.from({ length: 30 }, () => 'none');
      const isSame: string[] = [];
      const isDifferent: string[] = [];
      const isAbsent: string[] = [];
      let isWinner = false;

      rowsArray.forEach((row: (string | undefined)[]) => {
        let allCorrect = true;
        for(let i = 0; i <= 4; i++) {
          if( row[i] !== answer[i]){          
          allCorrect = false;
          break;
        }
      }
      if(allCorrect) {
        isWinner = true;
      }
      if (isWinner) {
        setWinner(true);
        console.log(`wiiner= ${winner}`)
        return;
      }
      })

      rowsArray.forEach((row: (string | undefined)[], rowIndex: number) => {
        for(let i= 0; i <= 4; i++) {
        
          if (row[i] === answer[i]) {
            colourArray[rowIndex * 5 + i] = 'green';
            isSame.push(row[i]);
          } else if (answer.includes(row[i])) {
            colourArray[rowIndex * 5 + i] = 'yellow';
            isDifferent.push(row[i]);
          } else if (!answer.includes(row[i]) && row[i] !== undefined){
            colourArray[rowIndex * 5 + i] = 'grey';
            isAbsent.push(row[i]);
          }
        }
      });
      setChangeColor(colourArray);
      setUserAttempts(userAttempts + 1);
      setSame(isSame);
      setDifferent(isDifferent);
      setNotInAnswer(isAbsent);
    }

  }
      
  return (
    <>
      {winner ? <Modal answer={answer} /> : !winner && userAttempts === 6 ? <ModalLoser answer={answer}/> : null}
      <Gameboard rows={rows} changeColour={changeColour} />
      <Keyboard handleKeyClick={handleKeyClick} handleDelete={handleDelete} handleSubmit={handleSubmit} changeColour={changeColour} same={same} different={different} notInAnswer={notInAnswer} />
    </>
)
}

export default Board;

