import React, { useState } from "react";
import './CalculatorStyle.css'
import Container from '@mui/material/Container';
import {Box} from "@mui/system";

const Calculator = (props) => {
    const [number, setNumber] = useState(0)
    const [oldNumber, setOldNumber] = useState(0)
    const [operator, setOperator] = useState()
    function inputNumber(e) {
        const input = e.target.value
        if(number === 0) {
            setNumber(input)
        } else {
            setNumber(number + input)
        }
        const i = 7
        const h1 = document.querySelector('h1.result')
        if(h1.textContent.length >= i) {
            console.log('entrei')
            h1.style.fontSize = "30px"
            i++
        }
    }

    function allClear() {
        setNumber(0)
    }

    function changeSign() {
        setNumber( -(number) )
    }

    function percent() {
        if(number === 0) {
            setNumber(0)
        } else {
            setNumber(number / 100)
        }
    }

    function operatorHandler(e) {
        const operator = e.target.value
        setOldNumber(number)
        setNumber(0)
        setOperator(operator)
    }

    function calculate() {
        if(operator === "+") {
            setNumber(parseFloat(oldNumber) + parseFloat(number))
        } else if(operator === "-") {
            setNumber(parseFloat(oldNumber) - parseFloat(number))
        } else if(operator === "x") {
            setNumber(parseFloat(oldNumber) * parseFloat(number))
        } else if(operator === "/") {
            setNumber(parseFloat(oldNumber) / parseFloat(number))
        }
        setOperator("")
        setOldNumber(0)
    }


    return (
        <Box m={5}>
        <Container maxWidth="xs">
            <div className="calculator-body">
                <h1 className="result" value={number}>{number}</h1>
                <button onClick={allClear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={percent}>%</button>
                <button className="orange-button" onClick={operatorHandler} value="/">/</button>
                <button className="grey-button" onClick={inputNumber} value={7}>7</button>
                <button className="grey-button" onClick={inputNumber} value={8}>8</button>
                <button className="grey-button" onClick={inputNumber} value={9}>9</button>
                <button className="orange-button" onClick={operatorHandler} value="x">X</button>
                <button className="grey-button" onClick={inputNumber} value={4}>4</button>
                <button className="grey-button" onClick={inputNumber} value={5}>5</button>
                <button className="grey-button" onClick={inputNumber} value={6}>6</button>
                <button className="orange-button" onClick={operatorHandler} value="-">-</button>
                <button className="grey-button" onClick={inputNumber} value={1}>1</button>
                <button className="grey-button" onClick={inputNumber} value={2}>2</button>
                <button className="grey-button" onClick={inputNumber} value={3}>3</button>
                <button className="orange-button" onClick={operatorHandler} value="+">+</button>
                <button className="grey-button"id="zero" onClick={inputNumber} value={0}>0</button>
                <button className="grey-button" onClick={inputNumber} value={"."}>,</button>
                <button className="orange-button" onClick={calculate}>=</button>
            </div>
        </Container>
        </Box>
    )
}

export default Calculator