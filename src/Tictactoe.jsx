import React,{useEffect, useState} from 'react';
import './index.css';
import Squarecomponent from './Squarecomponent';

const initialstate = ["","","","","","","","",""];



const Tictactoe = ()=>{
    const [gamestate,updategamestate] = useState(initialstate);
    const [isXchance,updateisXchance] = useState(false);

    useEffect(()=>{
         const Winner =  checkwinner();
         if(Winner){
             alert(`congratulation you won the game  ${Winner}`)

             updategamestate(initialstate)
         }
    },[gamestate]);

    const checkwinner = ()=>{
            const lines = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6],
            ];
            for(let i = 0; i<lines.length; i++){
                const [a,b,c] = lines[i];
                if(gamestate[a] && gamestate[a] ===  gamestate[b] && gamestate[a] === gamestate[c]){
                    return gamestate[a];
                } 
            }
            return null;
    }

    const onsquareclicked = (index)=>{
             let strings = Array.from(gamestate);
             strings[index] = isXchance?"X":"O";
             updategamestate(strings);
             updateisXchance(!isXchance);

    };
    return(
        <>
        <div className="app-header">

        <h1 className="headingtext">😃  Tic-tac-toe  😃</h1>

        <div className=" row jc-center">
            <Squarecomponent className="b-bottom-right" state={gamestate[0]} onClick={()=>onsquareclicked(0)}/>
            <Squarecomponent className="b-bottom-right" state={gamestate[1]} onClick={()=>onsquareclicked(1)}/>
            <Squarecomponent className="b-bottom"       state={gamestate[2]} onClick={()=>onsquareclicked(2)}/>
        </div>

        <div className=" row jc-center">
        <Squarecomponent className="b-bottom-right" state={gamestate[3]} onClick={()=>onsquareclicked(3)}/>
        <Squarecomponent className="b-bottom-right" state={gamestate[4]} onClick={()=>onsquareclicked(4)}/>
        <Squarecomponent className="b-bottom"       state={gamestate[5]} onClick={()=>onsquareclicked(5)}/>
        </div>

        <div className=" row jc-center">
        <Squarecomponent className="b-right" state={gamestate[6]} onClick={()=>onsquareclicked(6)}/>
        <Squarecomponent className="b-right" state={gamestate[7]} onClick={()=>onsquareclicked(7)}/>
        <Squarecomponent                     state={gamestate[8]} onClick={()=>onsquareclicked(8)}/>
        </div>

        <button className="clear-button" onClick={()=> updategamestate(initialstate)}>Start New Game </button>

        
        </div>
        </>
    );
};

export default Tictactoe;