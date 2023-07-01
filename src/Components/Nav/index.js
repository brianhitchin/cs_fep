import './index.css'

export default function Navbar() {
    return (
        <>
            <nav className="nmain">
                <ul>
                    <li><a href="/" className="ninner">Home</a></li>
                    <li><a href="/reserve" className="ninner">Reserve</a></li>
                    <li><a href="#" className="ninner">About us</a></li>
                </ul>
            </nav>
        </>
    )
}