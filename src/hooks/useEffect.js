import React, { useState, useEffect } from 'react';
import './style.css';

const UseEffect = () => {
    const [myNum, setMyNum] = useState(0);

    useEffect(() => {
        document.title = `Chats(${myNum})`;
    }); // array dependency used when you just want to render it once at the time of load


    return (
        <>
            <div className=''>
                <p>{myNum}</p>
                <div className='button2' onClick={() => setMyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className='button2' onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}

export default UseEffect