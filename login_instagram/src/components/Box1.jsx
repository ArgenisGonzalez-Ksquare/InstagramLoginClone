import Instagram_logo from '../assets/Instagram_logo.svg.png';
import Input from './Input';
import {LoginButton, FaceBookButton, ForgotPassword} from './Buttons';

const Box1 = () => {
    return (
        <div className=' box-1'>
            <div className='box-1-logo'>
                <img src={Instagram_logo} alt="logo" className='instagram-logo' />
            </div>

            <Input/>
            <LoginButton/>
            <FaceBookButton/>
            <ForgotPassword/>
        </div>
    );
  };
  
  export default Box1;