import './Settings.scss';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function Settings() {
  const [length, setLength] = useState(0);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);

  return (
    <div className='settings'>
      <div className='slider'>
        <h5>Character Length</h5>
        <h4>{length}</h4>
        <Slider 
          aria-label="Character length"
          defaultValue={length}
          valueLabelDisplay="off"
          step={1}
          min={0}
          max={20}
          onChange={(event, value) => setLength(value)}
        />
      </div>
      <div className='checkboxes'>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label='Include Uppercase Letters'/>
          <FormControlLabel control={<Checkbox />} label='Include Lowercase Letters'/>
          <FormControlLabel control={<Checkbox />} label='Include Numbers'/>
          <FormControlLabel control={<Checkbox />} label='Include Symbols'/>
        </FormGroup>
      </div>
    </div>
  )
}
