import './Settings.scss';
import Slider from '@mui/material/Slider';
import { useSelector, useDispatch } from 'react-redux';
import { setLength } from '../../features/length/lengthSlice';

export default function Settings() {
  const length = useSelector((state) => state.length.value);
  const dispatch = useDispatch();

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
          onChange={(event, value) => dispatch(setLength(value))}
        />
      </div>
    </div>
  )
}
