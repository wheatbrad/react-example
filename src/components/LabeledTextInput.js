import { forwardRef, useEffect, useState } from 'react';

const LabeledTextInput = forwardRef(({ label, handleUpdate, reset }, ref) => {
    const [ state, setState ] = useState('');

    useEffect(() => {
        setState('');
    // eslint-disable-next-line
    }, [reset.current]);

    return (
        <div>
            <label>{label}</label>
            <input
                ref={ref}
                type='text'
                name={label.toLowerCase()}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => handleUpdate(e.target.name, e.target.value)} />
        </div>
    );
});

export default LabeledTextInput;