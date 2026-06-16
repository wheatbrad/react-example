import { useEffect, useRef, useState } from 'react';
import LabeledTextInput from './components/LabeledTextInput';

const node = document.getElementById('FIELD_555');

function App() {
  const data = useRef(node);
  const [state, setState] = useState({});
  const focus = useRef(null);
  const [reset, setReset] = useState(0);

  const handleUpdate = (key, value) => {
    if (value === '') return;
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleReset = () => {
    setState({});
    setReset(r => r + 1);
  };

  useEffect(() => {
    data.current.value = JSON.stringify(state);
  }, [state]);

  useEffect(() => {
    if (reset > 0) focus.current?.focus();
  }, [reset]);

  return (
    <form onSubmit={e => e.preventDefault()}>
      <LabeledTextInput
        ref={focus}
        label='Name'
        handleUpdate={handleUpdate}
        reset={reset} />
      <LabeledTextInput label='Title' handleUpdate={handleUpdate} reset={reset} />
      <LabeledTextInput label='Company' handleUpdate={handleUpdate} reset={reset} />
      <button onClick={handleReset}>
        Clear Data
      </button>
    </form>
  );
}

export default App;