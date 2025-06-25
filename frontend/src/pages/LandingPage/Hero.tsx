import { motion } from 'motion/react';
import VerifiedIcon from '@mui/icons-material/Verified';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { TypeAnimation } from 'react-type-animation';
import Service from './Service';
import Stats from './Stats';
import Features from './Features';
import Pricing from './Pricing';



function Hero() {
    return (
        <>
            <main className='mt-40'>
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
                    <button className='bg-blue-500 text-white h-10 w-44 rounded-lg text-sm flex items-center justify-center cursor-pointer'>Upload my Resume <UploadFileIcon sx={{ borderLeft: 1, height: '100%', marginLeft: 1 }} /></button>
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



