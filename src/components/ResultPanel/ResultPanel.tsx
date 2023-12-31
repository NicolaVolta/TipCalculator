import './ResultPanel.scss';


export const ResultPanel = () => {

    return (
        <div className='result-panel'>
            <div className='value-results-container'>
                <div className='value-container'>
                    <div className='label-container'>
                        <span className='label'>Tip amount</span>
                        <span className='unit'>/ person</span>
                    </div>
                    <div className='value'>
                        <span>$0</span>
                    </div>
                </div>
                <div className='value-container'>
                    <div className='label-container'>
                        <span className='label'>Total</span>
                        <span className='unit'>/ person</span>
                    </div>
                    <div className='value'>
                        <span>$0</span>
                    </div>
                </div>
            </div>
            <input type='button' value='RESET' className='reset-button'/>
        </div>
    )
}
