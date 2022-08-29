import './App.scss';
import { useState } from 'react';
import TextField from './components/TextField/TextField';

function App() {
  const [text, setText] = useState('P4$5W0rD!');
  const [copied, setCopied] = useState(false);

  return (
    <div className='app'>
      <h1>Password Generator</h1>
      <TextField 
      text={text}
      copied={copied}
      setCopied={setCopied}
      />
    </div>
  );
}

export default App;
