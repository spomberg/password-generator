import './App.scss';
import { useState } from 'react';
import TextField from './components/TextField/TextField';

function App() {
  const [copied, setCopied] = useState(false);

  return (
    <div className='app'>
      <h1>Password Generator</h1>
      <TextField 
      copied={copied}
      setCopied={setCopied}
      />
    </div>
  );
}

export default App;
