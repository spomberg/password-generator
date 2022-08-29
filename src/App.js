import './App.scss';
import TextField from './components/TextField/TextField';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <div className='app'>
      <h1>Password Generator</h1>
      <TextField />
      <Settings />
    </div>
  );
}

export default App;
