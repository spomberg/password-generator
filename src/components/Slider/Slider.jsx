import './Slider.scss';
import Slider from '@mui/material/Slider';
import { useSelector, useDispatch } from 'react-redux';
import { setLength } from '../../features/length/lengthSlice';

export default function Settings() {
  const length = useSelector((state) => state.length.value);
  const dispatch = useDispatch();

  return (
    <div className='slider'>
      <div className='length'>
        <h4>Character Length</h4>
        <h5>{length}</h5>
      </div>
      <Slider 
        aria-label="Character length"
        defaultValue={0}
        valueLabelDisplay="off"
        step={1}
        min={0}
        max={20}
        onChange={(event, value) => dispatch(setLength(value))}
      />
      </div>
  )
}
