import './Settings.scss';
import { useDispatch } from 'react-redux';
import { setUpperCase } from '../../features/settings/hasUpperCaseSlice';
import { setLowerCase } from '../../features/settings/hasLowerCaseSlice';
import { setNumbers } from '../../features/settings/hasNumbersSlice';
import { setSymbols } from '../../features/settings/hasSymbolsSlice';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Settings() {
  const dispatch = useDispatch();

  return (
    <div className='settings'>
        <FormGroup>
          <FormControlLabel 
            control={<Checkbox 
              disableRipple={true} 
              onChange={(e) => dispatch(setUpperCase(e.target.checked))} 
              />} 
            label='Include Uppercase Letters'
          />
          <FormControlLabel 
            control={<Checkbox 
              disableRipple={true} 
              onChange={(e) => dispatch(setLowerCase(e.target.checked))} 
              />} 
            label='Include Lowercase Letters'
          />
          <FormControlLabel 
            control={<Checkbox 
              disableRipple={true} 
              onChange={(e) => dispatch(setNumbers(e.target.checked))} 
              />} 
            label='Include Numbers'
          />
          <FormControlLabel 
            control={<Checkbox 
              disableRipple={true}  
              onChange={(e) => dispatch(setSymbols(e.target.checked))} 
              />} 
            label='Include Symbols'
          />
          </FormGroup>
      </div>
  )
}
