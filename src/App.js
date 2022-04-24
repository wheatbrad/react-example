import { useEffect, useState } from 'react';
import './App.css';

function App() {

    /**
     * Reference to "hidden" input for the purpose of 
     * passing data to Pageflex project
     */
    const data = document.getElementById('FIELD_555');

    const [ state, setState ] = useState({
        name: 'Brad Runnels',
        title: 'developer',
    });
    const [ updateCounter, setUpdateCounter ] = useState(0);
    
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    const handleUpdate = e => {
        setUpdateCounter(prevState => prevState + 1);
    };

    useEffect(
        () => { data.value = JSON.stringify(state) },
        [updateCounter]
    );

    /**
     * Below is the JSX that will be transpiled into Javascript
     */
    return (
        <div>
            <label>Name</label>
            <input
                type='text'
                name='name'
                onChange={handleChange}
                onBlur={handleUpdate}
                value={state.name} />

            <label>Title</label>
            <input
                type='text'
                name='title'
                onChange={handleChange}
                onBlur={handleUpdate}
                value={state.title} />
        </div>
    );
}

export default App;
