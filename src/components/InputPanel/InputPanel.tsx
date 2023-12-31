import './InputPanel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const InputPanel = () => {
    return (
        <div className='input-panel'>
            <span>Bill</span>
            <div className='input'>
                <FontAwesomeIcon icon={faDollarSign} className='icon'/>
                <input type='number'/>
            </div>
            
            <span>Select Tip %</span>
            <div className='tip-percentage'>
                <div>
                    <input type='button' value="5%" />
                    <input type='button' value="10%"/>
                    <input type='button' value="15%"/>
                </div>
                <div>
                    <input type='button' value="25%"/>
                    <input type='button' value="50%"/>
                    <input type='number' placeholder="Custom"/>
                </div>
            </div>

            <span>Number of people</span>
            <div className='input'>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                <input type='number'/>
            </div>
        </div>
    )
}
