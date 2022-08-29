import { useState } from 'react';
import './App.scss';
import TextField from './components/TextField/TextField';

function App() {
  const [text, setText] = useState('P4$50rD!');

  return (
    <div className='app'>
      <h1>Password Generator</h1>
      <TextField text={text}/>
    </div>
  );
}

export default App;
