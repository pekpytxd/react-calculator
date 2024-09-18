import CalculatorNumber from "./CalculatorNumber.jsx";
import {numbers} from "../data/numbers.js";
import CalculatorActions from "./CalculatorActions.jsx";
import {actions} from "../data/actions.js";
import {useState} from "react";
import {FaAngleLeft, FaEquals} from "react-icons/fa";
import equals from "../services/equals-service.js";

export default function Calculator() {
    const [inputValue, setInputValue] = useState("");

    const validateInputVale = (value) => {
        if (inputValue === "Error" || inputValue === '0') {
            setInputValue('');
        }
    }

    const handleNumberClick = (value) => {
        validateInputVale(value)
        setInputValue(prevValue => prevValue + value);
    }

    const handleActionClick = (value) => {
        validateInputVale(value);
        const lastChar = inputValue.trim().slice(-1);
        if (inputValue === '')
            setInputValue('');
        else if (actions.includes(lastChar))
            setInputValue(prevValue => prevValue.slice(0, -1) + value);
        else
            setInputValue(prevValue => prevValue + value);
    }

    const handleEqualsClick = (value) => {
        if (value.length === 0) {
            setInputValue('');
            return;
        }
        setInputValue(equals(value))
    }

    return (<>
        <div className="relative h-screen flex flex-col items-center justify-start">
            <div className="flex items-center mb-1 mt-1 w-1/2">
                <input className="border-2 border-blue-700 p-2 flex-grow bg-amber-100" value={inputValue} disabled/>
                <button className="ml-2 shrink-0 border-black border-2 p-2" onClick={() => setInputValue('')}>
                    <FaAngleLeft/>
                </button>
                <button className="ml-2 shrink-0 border-black border-2 p-2"
                        onClick={() => handleEqualsClick(inputValue)}>
                    <FaEquals/>
                </button>
            </div>
            <div className="actions grid grid-cols-5 w-1/2">
                {actions.map((action, index) => (
                    <CalculatorActions key={index} action={action} onClick={handleActionClick}/>))}
            </div>
            <div className="grid grid-cols-3 size-1/2">
                {numbers.map((number, index) => <CalculatorNumber onClick={handleNumberClick} key={index}
                                                                  number={number}/>)}
            </div>
            <div className="grid grid-cols-1 w-1/2">
                <CalculatorNumber onClick={handleNumberClick} number={0}/>
            </div>
        </div>
    </>)
}