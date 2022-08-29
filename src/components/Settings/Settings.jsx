import './Settings.scss';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

export default function Settings() {
  const [length, setLength] = useState(0);

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
      </div>
    </div>
  )
}
