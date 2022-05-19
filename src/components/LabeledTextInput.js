import { useState } from 'react';

const LabeledTextInput = ({ label, handleUpdate }) => {
    const [ state, setState ] = useState('');

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