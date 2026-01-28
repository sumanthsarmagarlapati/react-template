import { Button } from "primereact/button";
import { useReducer, useState } from "react";


export default function ReactReducer() {
    interface Data {
        num1: number, num2: number, num3: number
    }

    type Action = | { type: "fiveplus" } | { type: "oneplus" } | { type: "reset" } | { type: "custom", value: number }

    function userReducer(state: Data, action: Action): Data {
        switch (action.type) {
            case "fiveplus":
                return { ...state, num2: state.num2 + 5 }
            case "oneplus":
                return { ...state, num1: state.num1 + 1 }
            case "reset":
                return { num1: 0, num2: 0, num3: 0 }
            case "custom":
                return { ...state, num3: state.num3 + Number(action.value) }
            default:
                return state
        }
    }
    const [value, setValue] = useState<number>(0)
    const [data, dispatch] = useReducer(userReducer, { num1: 0, num2: 0, num3: 0 })

    return (
        <div>
            <input type="number" value={value} placeholder="Enter your custom incremental number" onChange={(val) => setValue(Number(val.target.value))} />
            <Button onClick={() => dispatch({ type: "fiveplus" })}>Click here to add 5</Button>
            <Button onClick={() => dispatch({ type: "oneplus" })} >Click here to add 1</Button>
            <Button onClick={() => dispatch({ type: "custom", value })} >Click here to add custom value</Button>

            <p>
                {JSON.parse(JSON.stringify(data))}
            </p>
        </div>
    )
}