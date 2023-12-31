import React, { FocusEvent, useState } from 'react';
import './InputPanel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { tInputs } from '../../pages/App';

interface iInputPanelProps {
    onInputChange: (newInput: tInputs) => void,
    inputs: tInputs
}

export const InputPanel = ({ onInputChange, inputs }: iInputPanelProps) => {
    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
        event.target.select();
    }

    const selectPercentage = (value: number, isCustom: boolean) => {
        onInputChange({ ...inputs, tip: { value, isCustom}});
    }

    const onBillChange = (newValue: number) => {
        onInputChange({ ...inputs, bill: newValue});
    }

    const onPeopleChange = (newValue: number) => {
        onInputChange({ ...inputs, peopleNumber: newValue});
    }

    return (
        <div className='input-panel'>
            <span>Bill</span>
            <div className='input'>
                <FontAwesomeIcon icon={faDollarSign} className='icon'/>
                <input type='number' value={inputs.bill} onFocus={handleFocus} onChange={(e) => onBillChange(Number(e.target.value))}/>
            </div>
            
            <span>Select Tip %</span>
            <div className='tip-percentage'>
                <div>
                    <input type='button' value="5%" onClick={() => selectPercentage(5, false)}/>
                    <input type='button' value="10%" onClick={() => selectPercentage(10, false)}/>
                    <input type='button' value="15%" onClick={() => selectPercentage(15, false)}/>
                </div>
                <div>
                    <input type='button' value="25%" onClick={() => selectPercentage(25, false)}/>
                    <input type='button' value="50%" onClick={() => selectPercentage(50, false)}/>
                    <input type='number' placeholder="Custom"  onChange={(e) => selectPercentage(Number(e.target.value), true)}/>
                </div>
            </div>

            <div className='number-of-people-container'>
                <span>Number of people</span>
                {inputs.peopleNumber === 0 && <span className='number-of-people-error'>Can't be zero</span>}
            </div>
            <div className='input'>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                <input type='number' 
                    value={inputs.peopleNumber} 
                    className={`${inputs.peopleNumber === 0 ? 'number-of-people-container-error' : ''}`}
                    onFocus={handleFocus} 
                    onChange={(e) => onPeopleChange(Number(e.target.value))}/>
            </div>
        </div>
    )
}
