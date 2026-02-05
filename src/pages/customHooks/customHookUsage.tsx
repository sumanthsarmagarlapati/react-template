import React from 'react';
import useCounter from './customHook';

export default function CustomHookUsage() {
    const { counter, increamennt, deceremnt, reset } = useCounter({ value: 0 })
    return (
        <div>
            <p>{counter}</p>
            <button onClick={increamennt}>Increment</button>
            <button onClick={deceremnt}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}