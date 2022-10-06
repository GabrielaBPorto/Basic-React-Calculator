
import { useState } from 'react'
import './calculator.scss'
// import { operations } from '../../enums/operations.enum'
import * as ts from "typescript";


function createOperationsButtons(setValue : Function){
	const operationsButtons = [];
	const [ops, setOps] = useState(['+','-','/','*'])
	for(let op of ops){
		operationsButtons.push(
			<button type="button" className="operation" onClick={() => setValue((value : string) => value + ' ' + op + ' ')} > {op} </button>
		)
	}
	return operationsButtons;
}

function createNumberButtons(setValue : Function) {
	const numberButtons = []
	for(let i=0; i<9; i++){
		numberButtons.push(
			<button type="button" className="number" onClick={() => setValue((value : number) => value + (i+1) )}>{i+1}</button>
		)
	}
	return numberButtons;
}

export function Calculator() {
	const [value, setValue] = useState('')

	const operationsButtons = createOperationsButtons(setValue);
	const numberButtons = createNumberButtons(setValue);
	  return (
	  <div className="calculator">
	  	<input className="visor" type="text" value={value} />
		{operationsButtons}
		{numberButtons}
		<button type="button" className="result" onClick={() => setValue(value.slice(0,-1))} > C </button>
		<button type="button" className="result" onClick={() => setValue('')} > CE </button>
		<button type="submit" className="result" onClick={() => setValue(eval(value.toString().trim()))}>=</button>
	  </div>
  )
}
