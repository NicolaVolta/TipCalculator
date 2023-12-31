import './App.scss';
import { InputPanel } from '../components/InputPanel/InputPanel';
import { ResultPanel } from '../components/ResultPanel/ResultPanel';


function App() {
    return (
        <div className='tip-page'>
            <div className='title'>
                <span>SPLI</span>
                <span>TTER</span>
            </div>

            <div className='tip-container'>
                <InputPanel/>
                <ResultPanel/>
            </div>
        </div>
    )
}

export default App
