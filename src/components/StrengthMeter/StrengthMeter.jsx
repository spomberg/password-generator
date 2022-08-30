import './StrengthMeter.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateStrength } from '../../helpers/helpers';
import { setStrength } from '../../features/strength/strengthSlice';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';

export default function StrengthMeter() {
  const strength = useSelector((state) => state.strength.value);
  const length = useSelector((state) => state.length.value);
  const hasUpperCase = useSelector((state) => state.hasUpperCase.value);
  const hasLowerCase = useSelector((state) => state.hasLowerCase.value);
  const hasNumbers = useSelector((state) => state.hasNumbers.value);
  const hasSymbols = useSelector((state) => state.hasSymbols.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStrength(updateStrength(length, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols)));
  }, [strength, length, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols, dispatch]);
  

  return (

    <div className='strength-meter'>
      <h3>STRENGTH</h3>
      <div className='right-side'>
        <Typography 
          className={`strength ${strength === 'N/A' && 'empty'}`} 
          variant="h5">
            {strength}
        </Typography>
        <div className='strength-bars'>
          <div className={`bar ${strength === 'STRONG' && 'strong'} ${strength === 'MEDIUM' && 'medium'} ${strength === 'WEAK' && 'weak'} ${strength === 'TOO WEAK!' && 'too-weak'}`} />
          <div className={`bar ${strength === 'STRONG' && 'strong'} ${strength === 'MEDIUM' && 'medium'} ${strength === 'WEAK' && 'weak'}`} />
          <div className={`bar ${strength === 'STRONG' && 'strong'} ${strength === 'MEDIUM' && 'medium'}`} />
          <div className={`bar ${strength === 'STRONG' && 'strong'} `} />
        </div>
      </div>
    </div>
  )
}
