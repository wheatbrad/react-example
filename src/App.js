import { useEffect, useRef, useState } from 'react';
import './App.css';
import LabeledTextInput from './components/LabeledTextInput';

function App() {
    const data = useRef(document.getElementById('FIELD_555'));
    const [ state, setState ] = useState({});
    const focus = useRef(null);
    const reset = useRef(0);

    const handleUpdate = (key, value) => {
        if (value === '') return;

        setState(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const handleReset = () => {
        setState({});
        reset.current++;
        focus.current.focus();
    };

    useEffect(() => {
        data.current.value = JSON.stringify(state);
    }, [state]);


    return (
        <form onSubmit={e => e.preventDefault()}>
            <LabeledTextInput
                ref={focus}
                label='Name'
                handleUpdate={handleUpdate}
                reset={reset} />
            <LabeledTextInput label='Title' handleUpdate={handleUpdate} reset={reset} />
            <LabeledTextInput label='Company' handleUpdate={handleUpdate} reset={reset} />
            <button onClick={() => handleReset()}>
                Clear Data
            </button>
        </form>
    );
}

export default App;
