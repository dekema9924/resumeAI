

import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Box } from '@mui/material';
import { motion } from 'motion/react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import BackupIcon from '@mui/icons-material/Backup';
import { ArrowForward } from '@mui/icons-material';
import FlareIcon from '@mui/icons-material/Flare';
import ImageIcon from '@mui/icons-material/Image';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CheckIcon from '@mui/icons-material/Check';
import FadeInWhenVisible from '../../components/FadeInWhenVisible';



function Service() {
    return (
        <>
            <section id='services' className='mt-22 pt-12 bg-[#EEF5FE]  flex flex-col items-center justify-center gap-6 pb-22'>
                <Box className='flex bg-white w-fit px-4 rounded-2xl m-auto'>
                    <p className='font-semibold text-xs'><FileUploadIcon sx={{ color: 'blue' }} />Upload your Resume in pdf or docx</p>
                </Box>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ amount: 0.6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='text-[2.6em] leading-10 text-center w-96 font-semibold'>From raw inputs to <span className='text-blue-500'>refined insights.</span>
                </motion.h1>
                <p
                    className='text-sm text-gray-600 text-center md:w-[500px] w-96'>From cluttered PDFs to inconsistent layouts — our AI reshapes them into flawless, professional resumes.
                    AI understands it all and transforms it into a <span className='text-blue-500'>beautiful proffesional resume.</span>
                </p>

                <FadeInWhenVisible>
                    <div className='flex flex-col items-center justify-center gap-4 mt-9  '>
                        <p className='font-bold md:hidden'>What you can upload</p>
                        <div className='flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between md:w-[800px] m-auto w-96  md:p-9 lg:p-0'>
                            <ul className='list-none  ml-5 text-sm text-gray-600 mt-6 flex md:flex-col gap-3 flex-wrap justify-center md:items-start'>
                                <p className='font-bold hidden md:block mb-6'>What you can upload:</p>

                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className=' w-44 h-13 rounded-md shadow shadow-yellow-500 font-bold flex gap-2  pl-4 items-center bg-white'>
                                    <span className=' rounded-md w-8 text-white text-center flex items-center justify-center h-8 bg-yellow-500'>
                                        <PictureAsPdfIcon sx={{ fontSize: 20 }} />
                                    </span>
                                    Word docs (.docx)
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className=' w-44 h-13 rounded-md shadow shadow-green-500 font-bold flex gap-2  pl-4 items-center bg-white'>
                                    <span className=' rounded-md w-8 text-white text-center flex items-center justify-center h-8 bg-green-500'>
                                        <PictureAsPdfIcon sx={{ fontSize: 20 }} />
                                    </span>
                                    Plain text files (.txt)
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className=' w-44 h-13 rounded-md shadow shadow-red-500 font-bold flex gap-2  pl-4 items-center bg-white'>
                                    <span className=' rounded-md w-8 text-white text-center flex items-center justify-center h-8 bg-red-500'>
                                        <ImageIcon sx={{ fontSize: 20 }} />
                                    </span>
                                    Images
                                </motion.li>
                            </ul>
                            <Box className='hidden md:block md:my-0'>
                                <TrendingFlatIcon sx={{ fontSize: 44, color: 'oklch(62.3% 0.214 259.815)' }} />
                            </Box>
                            <div>
                                <div className='border border-dashed md:w-full w-96 m-auto md:m-0 h-80 rounded-lg flex flex-col items-center justify-center '>
                                    <span className='bg-blue-500 text-white text-center flex items-center justify-center h-14 rounded-md font-bold w-14 '>
                                        <BackupIcon sx={{ fontSize: 35 }} />
                                    </span>
                                    <h1 className='font-bold text-xl'>Drop your files here</h1>
                                    <p className='text-gray-500'>or click to browse and upload</p>
                                    <ul className='flex gap-2 flex-wrap mt-4 p-2'>
                                        <li className='bg-gray-300 w-fit px-4 rounded-md text-sm h-6 font-bold flex items-center justify-center'>PDF</li>
                                        <li className='bg-gray-300 w-fit px-4 rounded-md text-sm h-6 font-bold flex items-center justify-center'>DOCX</li>
                                        <li className='bg-gray-300 w-fit px-4 rounded-md text-sm h-6 font-bold flex items-center justify-center'>TXT</li>
                                        <li className='bg-gray-300 w-fit px-4 rounded-md text-sm h-6 font-bold flex items-center justify-center'>png</li>
                                    </ul>
                                    <button className='bg-blue-500 w-40 font-bold text-white text-sm h-11 mt-4 rounded-md '><FlareIcon sx={{ fontSize: 15, marginRight: 1 }} />Try it Now <ArrowForward /></button>

                                </div>

                                <div className='flex md:flex-row flex-col items-center gap-5 mt-6'>
                                    <div className='bg-white w-10/12 rounded-lg shadow-xl p-4 shadow-gray-600 h-34'>
                                        <div className='flex items-center gap-2 '>
                                            <span className='w-6 text-white rounded-full text-center h-6 bg-blue-700 flex items-center justify-center '><SmartToyIcon sx={{ fontSize: 16 }} /></span>
                                            <p className='flex items-center gap-1 font-bold text-gray-600 text-xs '>Ai is thinking
                                                <span className='block w-2 h-2 bg-blue-500 rounded-full'></span>
                                                <span className='block w-2 h-2 bg-blue-500 rounded-full'></span>
                                                <span className='block w-2 h-2 bg-blue-500 rounded-full'></span>
                                            </p>
                                        </div>
                                        <div className='flex flex-col gap-2 mt-4'>
                                            <span className='bg-gray-500 w-44 rounded-2xl h-2 opacity-35 block'></span>
                                            <span className='bg-gray-500 w-22 rounded-2xl h-2 opacity-35 block'></span>
                                            <span className='bg-gray-500 w-30 rounded-2xl h-2 opacity-35 block'></span>
                                        </div>
                                    </div>


                                    <div className='bg-white w-10/12 rounded-lg shadow-lg p-4 shadow-green-600 h-34'>
                                        <div className='flex items-center gap-2 '>
                                            <span className='w-6 text-white rounded-full text-center h-6 bg-green-500 flex items-center justify-center'><CheckIcon sx={{ fontSize: 16 }} /></span>
                                            <p className='flex items-center gap-1 font-bold text-xs text-green-700'>Perfect resume Created</p>
                                        </div>
                                        <div className='flex flex-col gap-2 mt-4 bg-green-100 p-3'>
                                            <span className='bg-green-700 w-44 rounded-2xl h-2 opacity-35 block'></span>
                                            <span className='bg-green-700 w-22 rounded-2xl h-2 opacity-35 block'></span>
                                            <span className='bg-green-700 w-30 rounded-2xl h-2 opacity-35 block'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </section>
        </>
    )
}

export default Service