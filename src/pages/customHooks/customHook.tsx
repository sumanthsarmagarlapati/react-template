import { useState } from "react";

export default function useCounter({ value }: { value: number }) {
    const [counter, setCounter] = useState(value)

    const increamennt = () => setCounter((pre) => pre + 1)
    const deceremnt = () => setCounter((pre) => pre - 1)
    const reset = () => setCounter(0)

    return { counter, increamennt, deceremnt, reset }
}