import React from 'react'
import { ModeToggle } from "@components/mode-toggle";

const Navbar = () => {
    return (
        <header className="top-0 left-0 w-full z-20 flex justify-between items-center p-4 backdrop-blur-sm sticky">

            <h2 className="text-2xl font-bold text-foreground">
                <a href="#home">
                    <img src="/title_logo.png" alt="Logo" className="h-20 w-auto" />
                </a>
            </h2>
            <nav className="flex gap-3 items-center">
                <a href="#about" className="nav-link">About</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
                <ModeToggle></ModeToggle>
            </nav>
        </header>
    )
}

export default Navbar