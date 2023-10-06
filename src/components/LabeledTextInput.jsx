import { forwardRef, useEffect, useState } from 'react';

const LabeledTextInput = forwardRef(({ label, handleUpdate, reset }, ref) => {
  const [ state, setState ] = useState('');

  useEffect(() => {
    setState('');

    if (ref !== null) {
      ref.current.focus();
    }
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