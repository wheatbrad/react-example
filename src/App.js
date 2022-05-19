import { useEffect, useRef, useState } from 'react';
import './App.css';
import LabeledTextInput from './components/LabeledTextInput';

function App() {
    const data = useRef(document.getElementById('FIELD_555'));
    const [ state, setState ] = useState({});

    const handleUpdate = (key, value) => {
        setState(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    useEffect(() => {
        data.current.value = JSON.stringify(state);
    }, [state]);


    return (
        <div>
            <LabeledTextInput label='Name' handleUpdate={handleUpdate} />
            <LabeledTextInput label='Title' handleUpdate={handleUpdate} />
            <LabeledTextInput label='Company' handleUpdate={handleUpdate} />
        </div>
    );
}

export default App;
