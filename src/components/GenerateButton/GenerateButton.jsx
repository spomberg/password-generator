import './GenerateButton.scss';
import { generatePassword } from '../../helpers/helpers';
import { useSelector, useDispatch } from 'react-redux';
import { setText } from '../../features/text/textSlice';
import { setCopied } from '../../features/copied/copiedSlice';
import { ReactSVG } from 'react-svg';
import RightArrow from '../../assets/images/icon-arrow-right.svg';

export default function GenerateButton() {
  const length = useSelector((state) => state.length.value);
  const hasUpperCase = useSelector((state) => state.hasUpperCase.value);
  const hasLowerCase = useSelector((state) => state.hasLowerCase.value);
  const hasNumbers = useSelector((state) => state.hasNumbers.value);
  const hasSymbols = useSelector((state) => state.hasSymbols.value);
  const dispatch = useDispatch();

  return (
    <button 
      className='generate'
      onClick={() => {
        dispatch(setText(generatePassword(length, hasUpperCase, hasLowerCase, hasNumbers, hasSymbols)));
        dispatch(setCopied(false));
      }}  
    >
      <span>GENERATE</span>
      <ReactSVG src={RightArrow}/>
    </button>
  )
}
