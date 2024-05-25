import phone from './phone.jpeg';
import mac from './mac.jpeg';
import audio from './audio.jpeg';

export default function Shop(){
    return(<>
    <div className='shopc'>
        <div className='macc'>
            
            <img src={mac} alt='mac' className='mac'></img>
            <div className='mact'>Shop mac</div>
        </div>
        <div className='phonec'>
            
            <img className='phone' alt='iphone' src={phone}></img>
            <div className='phonet'>Shop iPhone</div>
        </div>
        <div className='audioc'>
            
            <img className='audio' alt='audio' src={audio}></img>
            <div className='audiot'>Shop audio</div>
        </div>
    </div>
    
    </>)
}