import './css/Navbar.css'
import linkedinLogo from '../assets/logos/linkedin.svg'

export default function Navbar() {
    return (
        <div className="navbar">
            <span className="name">
                Raphael Lim
            </span>
            <div className="icon-container">
                <a href="https://www.linkedin.com/in/raphael-lim-25a973153/" target="_blank" rel="noreferrer noopener">
                    <img className="icon" src={linkedinLogo} alt="Linkedin" />
                </a>
            </div>
        </div>
    )
}