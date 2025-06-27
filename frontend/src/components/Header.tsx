
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <header className='mt-8 rounded-2xl flex justify-between items-center p-2 w-10/12 m-auto bg-white shadow-lg fixed top-0 z-50 left-0 right-0 '>
                {/* logo */}
                <div className='flex items-center gap-2  ml-10'>
                    <Box className='border bg-blue-500 text-white w-8 h-8 flex justify-center items-center rounded-md'>
                        <TextSnippetIcon />
                    </Box>
                    <h1 className='font-black text-2xl'>ReCV</h1>
                </div>
                <nav className="flex justify-between items-center px-6 py-4">


                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <ul className="flex items-center gap-4 text-sm font-medium text-gray-700">
                            <a onClick={() => { setMenuOpen(false), navigate('/') }}>
                                <li className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
                                    <RequestQuoteIcon sx={{ fontSize: 17 }} /> Home
                                </li>
                            </a>
                            <a onClick={() => setMenuOpen(false)} href="#services">
                                <li className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
                                    <AutoAwesomeIcon sx={{ fontSize: 17 }} /> Services
                                </li>
                            </a>
                            <a onClick={() => setMenuOpen(false)} href="#features">
                                <li className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
                                    <StickyNote2Icon sx={{ fontSize: 17 }} /> Features
                                </li>
                            </a>
                            <a onClick={() => setMenuOpen(false)} href="#pricing">
                                <li className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
                                    <RequestQuoteIcon sx={{ fontSize: 17 }} /> Pricing
                                </li>
                            </a>

                        </ul>

                        <button onClick={() => navigate('/register')} className="rounded-md cursor-pointer text-sm font-bold h-9 px-4 bg-blue-500 text-white flex items-center gap-1">
                            Get Started <ArrowForwardIcon sx={{ fontSize: 20 }} />
                        </button>
                    </div>

                    {/* Hamburger Menu Button - Mobile */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                            {menuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 md:hidden">
                            <ul className="flex flex-col items-start gap-4 p-6 text-gray-700 text-sm font-medium">
                                <a onClick={() => { setMenuOpen(false), navigate('/') }}>
                                    <li className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
                                        <RequestQuoteIcon sx={{ fontSize: 17 }} /> Home
                                    </li>
                                </a>
                                <a onClick={() => setMenuOpen(false)} href="#services">
                                    <li className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
                                        <AutoAwesomeIcon sx={{ fontSize: 17 }} /> Services
                                    </li>
                                </a>
                                <a onClick={() => setMenuOpen(false)} href="#features">
                                    <li className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
                                        <StickyNote2Icon sx={{ fontSize: 17 }} /> Features
                                    </li>
                                </a>
                                <a onClick={() => setMenuOpen(false)} href="#pricing">
                                    <li className="cursor-pointer flex items-center gap-1 hover:text-blue-500">
                                        <RequestQuoteIcon sx={{ fontSize: 17 }} /> Pricing
                                    </li>
                                </a>
                                <button onClick={() => navigate('/register')} className="w-full cursor-pointer rounded-md text-sm font-bold h-9 mt-4 bg-blue-500 text-white flex items-center justify-center gap-1">
                                    Get Started <ArrowForwardIcon sx={{ fontSize: 20 }} />
                                </button>
                            </ul>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}

export default Header
