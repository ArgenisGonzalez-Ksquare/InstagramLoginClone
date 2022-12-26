
import fb_icon from '../assets/fb_icon.png';

export const LoginButton = ( ) => {
    return (
    <div className='login-button-box'>
        <button className='login-button'>Login</button>
    </div>
    )
}


export const FaceBookButton = () => {
    return (
    <>
        <div className='line-box'>
            <div className="line-1"></div>
            <div className="or-box">OR</div>
            <div className="line-2"></div>
        </div>    
        <div className="fb-box">
            <img src={fb_icon} alt="logo" className='fb-logo' />
            <p className='fb-link'> Login with Facebook</p> 
        </div>
    </>
    )
}

export const ForgotPassword = () => {
    return (
    <div className="forgotten-password-box">
        <p>Forgotten your password?</p>
    </div>
    )
}
