import './TextField.scss';
import CopyIcon from '../../assets/images/icon-copy.svg';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useSelector, useDispatch } from 'react-redux';
import { setCopied } from '../../features/copied/copiedSlice';

export default function TextField() {
  const text = useSelector((state) => state.text.value);
  const copied = useSelector((state) => state.copied.value);
  const dispatch = useDispatch();

  return (
    <div className='text-field'>
       <span {...text === 'P4$5W0rD!' && {className: 'defaultText'} }>{text}</span>  
        <div className='copy-section'>
          {copied && (<span className='copied'>COPIED</span>)}
          <CopyToClipboard 
            onCopy={() => dispatch(setCopied(true))}
            text={text}
          >
            <img src={CopyIcon} alt="Copy password" />  
          </CopyToClipboard>
        </div>
    </div>
  )
}
