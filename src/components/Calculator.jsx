import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { subract, sum } from '../store/Calculator/Calculator.actions';
function Calculator() {
    const result = useSelector(function (state) {
        return state.calculator
    })
    const disptach = useDispatch();
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);



    return (
        <>
            <input
                type="number"
                placeholder="a"
                value={a}
                onChange={(event) => setA(Number(event.target.value))}
            />
            <input
                type="number"
                placeholder="b"
                value={b}
                onChange={(event) => setB(Number(event.target.value))}
            />

            <button
                onClick={() => {
                    disptach(sum(a, b))
                }}
            >
                somar
            </button>

            <button
                onClick={() => {
                    disptach(subract(a, b))
                }}
            >
                subtrair
            </button>

            <div>
                {result}
            </div>
        </>
    )
}

export default Calculator;