
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Box from '@mui/material/Box';

function Header() {
    return (
        <>
            <header className='border mt-22 rounded-2xl flex justify-between items-center p-2 w-11/12 m-auto bg-white shadow-lg'>
                {/* logo */}
                <div className='flex items-center gap-2'>
                    <Box className='border bg-blue-500 text-white w-8 h-8 flex justify-center items-center rounded-md'>
                        <TextSnippetIcon />
                    </Box>
                    <h1 className='font-black text-2xl'>DoCV</h1>
                </div>
                <nav className='flex gap-4 text-gray-5 font-semibold00 '>

                    <ul className='flex justify-between items-center gap-5'>
                        <li className='cursor-pointer flex items-center gap-1 hover:text-blue-500 '><AutoAwesomeIcon sx={{ fontSize: 17 }} />Features</li>
                        <li className='cursor-pointer flex items-center gap-1 hover:text-blue-500 '><StickyNote2Icon sx={{ fontSize: 17 }} />Cover Letter</li>
                        <li className='cursor-pointer flex items-center gap-1 hover:text-blue-500 '><DocumentScannerIcon sx={{ fontSize: 17 }} />Resume</li>
                        <li className='cursor-pointer flex items-center gap-1 hover:text-blue-500 '><RequestQuoteIcon sx={{ fontSize: 17 }} />Pricing</li>
                    </ul>

                    <button className='w-34 rounded-md cursor-pointer font-bold h-9 border bg-blue-500 text-white flex items-center justify-center '>Get Started <ArrowForwardIcon sx={{ fontSize: 20 }} /></button>
                </nav>
            </header>
        </>
    )
}

export default Header
