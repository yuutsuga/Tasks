"use client";

import { Body, Button, Keypad, Calc, Result, Title } from "./calculator.style";
import { PiBackspaceThin } from "react-icons/pi";
import { useState } from "react";

const Calculator = () => {
    const [num, setNum]: any = useState();
    const [oldNum, setOldNum]: any = useState(0);
    const [operator, setOperator]: any = useState();

    const handleNum = (e: any) => {
        let input = e.target.value;
        if (num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }
    }

    const handleOperator = (e: any) => {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    const clearAll = () => {
        setNum('');
    }

    const clearOne = () => {
        setNum(num.slice(0, - 1));
    }

    const porcentage = () => {
        setNum(num / 100);
    }

    const calc = () => {
        if (operator === '/') {
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator === 'x') {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === '-') {
            setNum(parseFloat(oldNum) - parseFloat(num));
        } else if (operator === '+') {
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
    }
    return (
        <Body>
            <Calc>
            <Title>Do your math :D</Title>
            <Result>{num}</Result>
            <Keypad>
                <Button onClick={clearAll} value={''}>AC</Button>
                <Button onClick={clearOne} value={''}><PiBackspaceThin size={30} /></Button>
                <Button onClick={porcentage} value={'%'}>%</Button>
                <Button onClick={handleOperator} value={'/'}>/</Button>
                <Button onClick={handleNum} value={'7'}>7</Button>
                <Button onClick={handleNum} value={'8'}>8</Button>
                <Button onClick={handleNum} value={'9'}>9</Button>
                <Button onClick={handleOperator} value={'x'}>x</Button>
                <Button onClick={handleNum} value={'4'}>4</Button>
                <Button onClick={handleNum} value={'5'}>5</Button>
                <Button onClick={handleNum} value={'6'}>6</Button>
                <Button onClick={handleOperator} value={'-'}>-</Button>
                <Button onClick={handleNum} value={'1'}>1</Button>
                <Button onClick={handleNum} value={'2'}>2</Button>
                <Button onClick={handleNum} value={'3'}>3</Button>
                <Button onClick={handleOperator} value={'+'}>+</Button>
                <Button onClick={handleNum} value={'0'}>0</Button>
                <Button onClick={handleNum} value={'.'}>.</Button>
                <Button onClick={calc} value={'='}>=</Button>
            </Keypad>
            </Calc>
        </Body>
    );
}

export default Calculator;
