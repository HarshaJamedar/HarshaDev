import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/HarshaLogo.webp"
import { FaSquareXTwitter } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className = "flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={50} height={33}
                    alt="logo" />             
                </a>
            </div>
            
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/harshavardhan-jemedar-knowmehere/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                        <FaLinkedin />
                </a>

                <a href="https://github.com/HarshaJamedar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">
                        <FaGithub />
                </a>

                <a href="https://leetcode.com/u/harsha_jemedar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Leetcode">
                        <SiLeetcode />
                </a>
                <a href="https://x.com/Harsha090898"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter">
                        <FaSquareXTwitter />
                </a>

            </div>
        </nav>
    )
}

export default Navbar