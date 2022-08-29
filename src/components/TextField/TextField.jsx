import './TextField.scss';
import CopyIcon from '../../assets/images/icon-copy.svg';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function TextField(props) {
  return (
    <div className='text-field'>
       <span {...props.text === 'P4$5W0rD!' && {className: 'defaultText'} }>{props.text}</span>  
        {props.copied && (<span>COPIED</span>)}
        <CopyToClipboard 
          onCopy={() => props.setCopied(true)}
          text={props.text}
        >
          <img src={CopyIcon} alt="Copy password" />  
        </CopyToClipboard>
    </div>
  )
}
