import React, { useState } from 'react';


export const addBall = currentBalls => {
    if (currentBalls >= 3) {
        return currentBalls = 0;
    } else {
        return currentBalls + 1;
    }
};


export const addStrike = currentStrikes => {
    if (currentStrikes >= 2) {
        return currentStrikes = 0;
    } else {
        return currentStrikes + 1;
    }

};


export const addFoul = currentStrikes => {
    if (currentStrikes >= 2) {
        return currentStrikes;
    } else {
        return currentStrikes + 1;
    }
};


export const addHit = currentValue => {
    return currentValue = 0;
};



function Dashboard() {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);


    return (
        <div className='scoreboard'>
            <h1>Scoreboard</h1>
            <div className="score-container">
                <div className='balls'>Balls: {balls}</div>
                <div className='strikes'>Strikes: {strikes}</div>

            </div>
            <div className='dashboard'>
                <button className='ball' onClick={() => setBalls(addBall(balls))}>Ball</button>
                <button className='strike' onClick={() => setStrikes(addStrike(strikes))}>Strike</button>
                <button className='foul' onClick={() => setStrikes(addFoul(strikes))}>Foul</button>
                <button className='hit' onClick={() => setStrikes(addHit(strikes), setBalls(addHit(balls)))}>Hit</button>
            </div>
        </div>

    )

}

export default Dashboard;