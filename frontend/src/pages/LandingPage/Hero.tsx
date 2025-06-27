import { motion } from 'motion/react';
import VerifiedIcon from '@mui/icons-material/Verified';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { TypeAnimation } from 'react-type-animation';
import Service from './Service';
import Stats from './Stats';
import Features from './Features';
import Pricing from './Pricing';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from 'react-router-dom';



function Hero() {
    const navigate = useNavigate();
    return (
        <>
            <main id='hero' className='mt-40 relative'>
                <a className='bg-blue-500 w-14 rounded-full h-14 text-center pt-3 fixed bottom-10 right-10' href="#hero">
                    <ArrowUpwardIcon className='text-white' />
                </a>

                <div className='flex items-center gap-3  h-6 w-fit px-6 rounded-3xl m-auto bg-blue-200 text-blue-600 text-sm'>
                    <span className='w-2 h-2 rounded-full bg-green-600  flex items-center justify-center'>
                        <span className='w-2 h-2 rounded-full bg-green-400 block animate-pulse'></span>
                    </span>
                    <p className='text-xs'>AI Powered Resume analyzer</p>
                </div>

                <section className='flex flex-col items-center justify-center mt-10 gap-10'>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mt-10 w-11/12 m-auto'>
                        <h1 className='text-[4em] font-bold leading-14 m-auto text-center max-w-[900px]'>Instant feedback to <span className='text-primary'>Transform your Resume  </span>into its best version.<VerifiedIcon /></h1>
                    </motion.div>
                    <TypeAnimation
                        sequence={[
                            'Upload your existing Resume.', // Text
                            1000,
                            ' Our AI gives precise feedback.',
                            1000,
                            'ATS friendly feedback in seconds.',
                            1000,                     // Wait time
                            '',                               // Clear
                        ]}
                        wrapper="p"
                        speed={50}
                        className="text-xl text-gray-600 font-bold text-center"
                        repeat={Infinity}
                    />
                    <button onClick={() => navigate('/login')} className='bg-blue-500 text-white h-10 w-44 rounded-lg text-sm flex items-center justify-center cursor-pointer'>Register Now <UploadFileIcon sx={{ borderLeft: 1, height: '100%', marginLeft: 4 }} /></button>
                </section>
                <Stats />
                <Service />
                <Features />
                <Pricing />

            </main>
        </>
    )
}

export default Hero



