import { useMemo } from 'react';
import './ResultPanel.scss';
import { tInputs } from '../../pages/App';

interface iResultPanelProps {
    onReset: () => void,
    inputs: tInputs
}

export const ResultPanel = ({ onReset, inputs }: iResultPanelProps) => {

    const tipAmount = useMemo(() => {
        if(inputs.tip === undefined) return 0;
        if(inputs.peopleNumber === 0) return 0;

        const totalTip = (inputs.bill * inputs.tip.value)/100;

        return (totalTip / inputs.peopleNumber).toFixed(2);
    }, [inputs]);

    const total = useMemo(() => {
        if(inputs.peopleNumber === 0) return 0;
        
        return (inputs.bill / inputs.peopleNumber).toFixed(2);
    }, [inputs]);

    return (
        <div className='result-panel'>
            <div className='value-results-container'>
                <div className='value-container'>
                    <div className='label-container'>
                        <span className='label'>Tip amount</span>
                        <span className='unit'>/ person</span>
                    </div>
                    <div className='value'>
                        <span>{`$${tipAmount}`}</span>
                    </div>
                </div>
                <div className='value-container'>
                    <div className='label-container'>
                        <span className='label'>Total</span>
                        <span className='unit'>/ person</span>
                    </div>
                    <div className='value'>
                        <span>{`$${total}`}</span>
                    </div>
                </div>
            </div>
            <input disabled={inputs.bill === 0 || inputs.peopleNumber === 0} type='button' value='RESET' className='reset-button' onClick={onReset}/>
        </div>
    )
}
