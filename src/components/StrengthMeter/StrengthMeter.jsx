import './StrengthMeter.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateStrength } from '../../helpers/helpers';
import { setStrength } from '../../features/strength/strengthSlice';
import { useEffect } from 'react';


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
      <h2>{strength}</h2>
    </div>
  )
}
