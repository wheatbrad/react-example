import { useEffect, useState } from 'react';

const LabeledTextInput = ({ label, handleUpdate, reset }) => {
    const [ state, setState ] = useState('');

    useEffect(() => {
        setState('');
    }, [reset.current]);

    return (
        <div>
            <label>{label}</label>
            <input
                type='text'
                name={label.toLowerCase()}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => handleUpdate(e.target.name, e.target.value)} />
        </div>
    );
};

export default LabeledTextInput;