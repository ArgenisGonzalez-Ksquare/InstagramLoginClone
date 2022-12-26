import appStore from '../assets/appStore.png';
import googleSTORE from '../assets/googleSTORE.png';

const GetApp = () =>{
    return(
        <div className='get-app-box'>
        <div className='app-store-google-play-box'>
            <p>Get the app</p>
            <img src={appStore} alt="logo" className='get-logo' />
            <img src={googleSTORE} alt="logo" className='get-logo' />
        </div>
        </div>
    )
}

export default GetApp;