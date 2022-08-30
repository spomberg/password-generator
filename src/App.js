import './App.scss';
import TextField from './components/TextField/TextField';
import Slider from './components/Slider/Slider';
import Settings from './components/Settings/Settings';
import StrengthMeter from './components/StrengthMeter/StrengthMeter';

function App() {
  return (
    <div className='app'>
      <h1>Password Generator</h1>
      <TextField />
      <Slider />
      <Settings />
      <StrengthMeter />
    </div>
  );
}

export default App;
