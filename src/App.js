import './App.scss';
import TextField from './components/TextField/TextField';
import Slider from './components/Slider/Slider';
import Settings from './components/Settings/Settings';
import StrengthMeter from './components/StrengthMeter/StrengthMeter';
import GenerateButton from './components/GenerateButton/GenerateButton';

function App() {
  return (
    <div className='app'>
      <h1>Password Generator</h1>
      <TextField />
      <div className='form'>
        <Slider />
        <Settings />
        <StrengthMeter />
        <GenerateButton />
      </div>
    </div>
  );
}

export default App;