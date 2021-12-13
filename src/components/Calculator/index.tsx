import { useState } from "react";
import { Container, Content } from "./styles";

export function Calculator() {
    const [result, setResult] = useState('0');
    const [msg, setMsg] = useState('');
    const [darkMode, setDarkMode] = useState(true);

    function handleNumberDisplay(value: string) {
        if (result.length < 10) {
            if (result.length === 1 && result === '0') {
                const newResult = Number(value);
                setResult(newResult.toString());
            }
            else {
                const valueFormatted = value !== '.' ? (Number(value)) : value;
                const newResult = result + valueFormatted;
                setResult(newResult.toString());
            }
        }
    }
    function handleClear() {
        setResult('0');
    }
    function handleOperation(operation: string) {
        if (result.length < 8) {
            const newResult = result + operation;
            setResult(newResult.toString());
        }
    }
    function handleResult() {
        let newResult;
        try {
            newResult = eval(result);
        }
        catch (e) {
            setMsg('Expressão mal formada');
            setTimeout(() => setMsg(''), 2500);
            return;
        }

        newResult = '' + newResult;
        if (newResult.length > 10) {
            newResult = newResult.toString().substring(0, 6);
        }
        setResult(newResult.toString())
    }
    function handleDarkMode() {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
    }

    return (
        <Container>
            <Content isActive={darkMode} >
                <header>
                    <div className="switchBox" >
                        <input type="checkbox" value="switch" onClick={handleDarkMode} />
                        <div className="box"></div>
                    </div>
                    <span>{msg}</span>
                </header>

                <section>
                    <div className="result">
                        {result}
                    </div>

                    <div className="keys">
                        <div className="row">
                            <button type="button" className="btn-dif btn-option" onClick={handleClear}>AC</button>
                            <button type="button" className="btn-option" onClick={() => handleOperation('%')} >%</button>
                            <button type="button" className="btn-operation" onClick={() => handleOperation('/')} >/</button>
                        </div>
                        <div className="row">
                            <button type="button" onClick={() => handleNumberDisplay('7')} >7</button>
                            <button type="button" onClick={() => handleNumberDisplay('8')} >8</button>
                            <button type="button" onClick={() => handleNumberDisplay('9')} >9</button>
                            <button type="button" className="btn-operation" onClick={() => handleOperation('*')} >x</button>
                        </div>
                        <div className="row">
                            <button type="button" onClick={() => handleNumberDisplay('4')} >4</button>
                            <button type="button" onClick={() => handleNumberDisplay('5')} >5</button>
                            <button type="button" onClick={() => handleNumberDisplay('6')} >6</button>
                            <button type="button" className="btn-operation" onClick={() => handleOperation('-')} >-</button>
                        </div>
                        <div className="row">
                            <button type="button" onClick={() => handleNumberDisplay('1')} >1</button>
                            <button type="button" onClick={() => handleNumberDisplay('2')} >2</button>
                            <button type="button" onClick={() => handleNumberDisplay('3')} >3</button>
                            <button type="button" className="btn-operation" onClick={() => handleOperation('+')} >+</button>
                        </div>
                        <div className="row">
                            <button type="button" onClick={() => handleNumberDisplay('0')} >0</button>
                            <button type="button" onClick={() => handleNumberDisplay('.')} >.</button>
                            <button type="button" className="btn-operation btn-dif" onClick={handleResult} >=</button>
                        </div>
                    </div>
                </section>
            </Content>
        </Container>
    );
}