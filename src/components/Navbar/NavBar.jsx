import React, { useRef, useEffect } from 'react'
import '../Navbar/NavBar.css'
import { BsFilePdf } from 'react-icons/bs';
import ResumePdf from '../../assets/Data/Resume_FOR_DEV.pdf'

const NavBar = () => {

    const navbar = useRef(null);
    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (navbar.current !== null) {
                if (window.scrollY > navbar.current.offsetHeight + 0) {
                    navbar.current.classList.add("active");
                } else {
                    navbar.current.classList.remove("active");
                }
            }
        });
    }, []);

    const v = "<VY />"
    return (
        <div id="Navbar" >
            <nav className='nav' ref={navbar}>

                <div className='logo'>
                    <a href="#hero"> {v} </a>
                </div>
                <div className="links">

                    <ul>
                        <li>
                            <a href="#hero">HOME</a>
                        </li>

                        <li>
                            <a href="#project">PROJECTS </a>
                        </li>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                        <li>
                            <a href={ResumePdf}
                                target="_blank" rel="noopener noreferrer"
                            >RESUME <BsFilePdf size={14} /></a>
                        </li>
                    </ul></div>
            </nav>
        </div>
    )
}

export default NavBar



