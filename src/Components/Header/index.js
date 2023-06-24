import logo from './logo.jpg'
import './index.css'

export default function Header() {
    return (
        <div className='hmain'>
            <img src={logo} alt='logo'></img>   
            <p className='rando'>Welcome to little lemon, now with new online booking feature!</p>
        </div>
    )
}