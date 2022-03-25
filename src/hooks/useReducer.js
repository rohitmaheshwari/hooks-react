import React, { useEffect, useReducer } from 'react';
import './style.css';

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state++;
    }
    if (action.type === "DECR" && state > 0) {
        state--;
    }
    return state;
}

const UseReducer = () => {
    useEffect(() => {
        document.title = `Chats(${state})`;
    }); // array dependency used when you just want to render it once at the time of load

    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData);

    return (
        <>
            <div className=''>
                <p>{state}</p>
                <div className='button2' onClick={() => dispatch({ type: "INCR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className='button2' onClick={() => dispatch({ type: "DECR" })}>
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

export default UseReducer