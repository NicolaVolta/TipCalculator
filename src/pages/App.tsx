import { useState } from 'react';
import './App.scss';
import { InputPanel } from '../components/InputPanel/InputPanel';
import { ResultPanel } from '../components/ResultPanel/ResultPanel';

import logo from './../assets/logo.svg';

type tTipPercentage = {
    value: number;
    isCustom: boolean;
}

export type tInputs = {
    bill: string,
    peopleNumber: string,
    tip?: tTipPercentage
}

const defaultInput: tInputs = {
    bill: '0',
    peopleNumber: '0'
}

function App() {
    const [inputs, setInputs] = useState<tInputs>(defaultInput);

    const handleInputChange = (newInput: tInputs) => {
        setInputs(newInput);
    }

    const handleReset = () => {
        setInputs(defaultInput);
    }

    return (
        <div className='tip-page'>
            <img src={logo}/>

            <div className='tip-container'>
                <InputPanel onInputChange={handleInputChange} inputs={inputs}/>
                <ResultPanel onReset={handleReset} inputs={inputs}/>
            </div>
        </div>
    )
}

export default App
