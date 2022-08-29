import './TextField.scss';
import CopyIcon from '../../assets/images/icon-copy.svg';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useSelector, useDispatch } from 'react-redux';
import { setText } from '../../features/text/textSlice';

export default function TextField(props) {
  const text = useSelector((state) => state.text.value);
  const dispatch = useDispatch();

  return (
    <div className='text-field'>
       <span {...text === 'P4$5W0rD!' && {className: 'defaultText'} }>{text}</span>  
        {props.copied && (<span>COPIED</span>)}
        <CopyToClipboard 
          onCopy={() => props.setCopied(true)}
          text={text}
        >
          <img src={CopyIcon} alt="Copy password" />  
        </CopyToClipboard>
    </div>
  )
}
