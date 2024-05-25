import phone from './ip.png';
export default function Ip(){
    return(<>
    <div className='iphead'>
        <div className='iptext'>
            <div className='ipt1'>iPhone 15 Pro</div>
            <div className='ipt2'>Titanium. So Strong. So Light. So Pro.</div>
            <button className='ipt3'>Buy</button>
        </div>
        <img className='ip15' src={phone} alt='iphone 15 pro'></img>
    </div>
    </>)
}