import { FocusEvent } from 'react';
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

    const onBillChange = (newValue: string) => {
        onInputChange({ ...inputs, bill: handleNewValue(newValue)});
    }

    const onPeopleChange = (newValue: string) => {
        onInputChange({ ...inputs, peopleNumber: handleNewValue(newValue)});
    }

    const handleNewValue = (newValue: string): string => {
        let value = newValue.replace(/^0+/, '');
        
        if(value === '') value = '0';

        return value;
    }

    const isPercentageSelected = (value: number, isCustom: boolean): boolean => {
        return isCustom && inputs.tip?.isCustom || (!inputs.tip?.isCustom && !isCustom && value === inputs.tip?.value);
    }

    return (
        <div className='input-panel'>
            <span>Bill</span>
            <div className='input'>
                <FontAwesomeIcon icon={faDollarSign} className='icon'/>
                <input type='number' value={inputs.bill} onFocus={handleFocus} onChange={(e) => onBillChange(e.target.value)}/>
            </div>
            
            <span>Select Tip %</span>
            <div className='tip-percentage'>
                <div>
                    <input type='button' 
                        value="5%" 
                        className={`${isPercentageSelected(5, false) ? 'selected-percentage' : ''}`}
                        onClick={() => selectPercentage(5, false)}/>
                    <input type='button' 
                        value="10%" 
                        className={`${isPercentageSelected(10, false) ? 'selected-percentage' : ''}`}
                        onClick={() => selectPercentage(10, false)}/>
                    <input type='button' 
                        value="15%"
                        className={`${isPercentageSelected(15, false) ? 'selected-percentage' : ''}`} 
                        onClick={() => selectPercentage(15, false)}/>
                </div>
                <div>
                    <input type='button' 
                        value="25%" 
                        className={`${isPercentageSelected(25, false) ? 'selected-percentage' : ''}`}
                        onClick={() => selectPercentage(25, false)}/>
                    <input type='button' 
                        value="50%" 
                        className={`${isPercentageSelected(50, false) ? 'selected-percentage' : ''}`}
                        onClick={() => selectPercentage(50, false)}/>
                    <input type='number' 
                        placeholder="Custom"  
                        value={ inputs.tip?.isCustom ? inputs.tip.value : '' }
                        className={`${isPercentageSelected(0, true) ? 'selected-percentage' : ''}`}
                        onChange={(e) => selectPercentage(Number(e.target.value), true)}/>
                </div>
            </div>

            <div className='number-of-people-container'>
                <span>Number of people</span>
                {Number(inputs.peopleNumber) === 0 && <span className='number-of-people-error'>Can't be zero</span>}
            </div>
            <div className='input'>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                <input type='number' 
                    value={inputs.peopleNumber} 
                    className={`${Number(inputs.peopleNumber) === 0 ? 'number-of-people-container-error' : ''}`}
                    onFocus={handleFocus} 
                    onChange={(e) => onPeopleChange(e.target.value)}/>
            </div>
        </div>
    )
}
