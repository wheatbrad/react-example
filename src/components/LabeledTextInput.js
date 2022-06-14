import { useEffect, useRef, useState } from 'react';

const LabeledTextInput = ({ label, handleUpdate, reset, isFocused = false }) => {
    const [ state, setState ] = useState('');
    const focused = useRef(null);

    useEffect(() => {
        setState('');

        if (isFocused) {
            focused.current.focus();
        }
    // eslint-disable-next-line
    }, [reset.current]);

    return (
        <div>
            <label>{label}</label>
            <input
                ref={focused}
                type='text'
                name={label.toLowerCase()}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => handleUpdate(e.target.name, e.target.value)} />
        </div>
    );
};

export default LabeledTextInput;