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

export const hitCount = currentHits => {
    return currentHits + 1;
}




function Dashboard() {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [hits, setHits] = useState(0);

    function handleBalls() {
        setBalls(addBall(balls));
        setStrikes(addStrike(strikes));
        setStrikes(addFoul(strikes));

    }

    function handleBalls() {
        setBalls(addBall(balls));
    }

    function handleStrikes() {
        setStrikes(addStrike(strikes));
    }

    function handleFouls() {
        setStrikes(addFoul(strikes));
    }

    function handleHits() {
        setStrikes(addHit(strikes));
        setBalls(addHit(balls));
        setHits(hitCount(hits));
    }


    return (
        <div className='scoreboard'>
            <h1>Scoreboard</h1>
            <div className="score-container">
                <div className='balls'>Balls: {balls}</div>
                <div className='strikes'>Strikes: {strikes}</div>
                <div className='hitcount'>Hits: {hits}</div>
            </div>
            <div className='dashboard'>
                <button className='ball' onClick={handleBalls}>Ball</button>
                <button className='strike' onClick={handleStrikes}>Strike</button>
                <button className='foul' onClick={handleFouls}>Foul</button>
                <button className='hit' onClick={handleHits}>Hit</button>

            </div>
        </div>

    )

}

export default Dashboard;