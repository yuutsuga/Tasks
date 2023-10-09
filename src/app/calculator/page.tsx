"use client";

import { useState } from "react";
import { BsBackspace } from "react-icons/bs";
import { Body, Calc, Result, Button, Keypad, Title } from "./calculadora.style";

function Calculadora() {
  const [num, setNum]: any = useState("");

  const handleClick = (e: any) => {
	setNum(num.concat(e.target.value));
  }

  const clean = () => {
	setNum('');
  }

  const back = () => {
	setNum(num.slice(0, - 1))
  }

  const calc = () => {
	setNum(eval(num).toString());
  }

  return (
	<Body>
		<Calc>
			<Title>Do your math :D</Title>
			<Result>{num}</Result>
			<Keypad>
				<Button onClick={clean}>C</Button>
				<Button onClick={back}><BsBackspace size={27}/></Button>
				<Button onClick={handleClick} value={'/'}>/</Button>
				<Button onClick={handleClick} value={'*'}>x</Button>
				<Button onClick={handleClick} value={7}>7</Button>
				<Button onClick={handleClick} value={8}>8</Button>
				<Button onClick={handleClick} value={9}>9</Button>
				<Button onClick={handleClick} value={'-'}>-</Button>
				<Button onClick={handleClick} value={4}>4</Button>
				<Button onClick={handleClick} value={5}>5</Button>
				<Button onClick={handleClick} value={6}>6</Button>
				<Button onClick={handleClick} value={'+'}>+</Button>
				<Button onClick={handleClick} value={1}>1</Button>
				<Button onClick={handleClick} value={2}>2</Button>
				<Button onClick={handleClick} value={3}>3</Button>
				<Button onClick={calc} value={'='}>=</Button>
				<Button onClick={handleClick} value={0}>0</Button>
				<Button onClick={handleClick} value={'.'}>.</Button>
			</Keypad>
		</Calc>
	</Body>
  )
}

export default Calculadora;
