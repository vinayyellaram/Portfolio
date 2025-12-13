import React from 'react'
import { ModeToggle } from "@components/mode-toggle";

const Navbar = () => {
    return (
        <header className="top-0 left-0 w-full z-20 flex justify-between items-center p-4 backdrop-blur-sm sticky">

            <h2 className="text-3xl font-bold text-foreground"> <a href="#home">
                VY</a>
            </h2>
            <nav className="flex gap-6">
                <a href="#about" className="pixel-button text-sm text-muted-foreground hover:text-foreground transition">About</a>
                <a href="#projects" className="pixel-button text-sm text-muted-foreground hover:text-foreground transition">Projects</a>
                <a href="#contact" className="pixel-button text-sm text-muted-foreground hover:text-foreground transition">Contact</a>
                <ModeToggle></ModeToggle>
            </nav>
        </header>
    )
}

export default Navbar