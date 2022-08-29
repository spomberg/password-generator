import './TextField.scss';
import CopyIcon from '../../assets/images/icon-copy.svg';

export default function TextField(props) {
  return (
    <div className='text-field'>
       <span>{props.text}</span>  
       <button>
        <img src={CopyIcon} alt="Copy password" />  
       </button>  
    </div>
  )
}
