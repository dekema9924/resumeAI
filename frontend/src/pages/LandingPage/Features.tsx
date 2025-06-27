

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FadeInWhenVisible from '../../components/FadeInWhenVisible';


function Features() {
    return (
        <>
            <div id='features' className='bg-white flex flex-col justify-center items-center pt-22'>
                <p className='text-blue-800 bg-blue-100 border border-blue-300 text-xs w-fit px-4 h-7 flex items-center justify-center rounded-2xl'>
                    <RocketLaunchIcon />POWERFUL FEAUTURES
                </p>
                <h1 className='text-4xl my-8 text-center'>What makes ReCV different?</h1>
                <p className='w-10/12 max-w-[600px] text-center text-gray-500'>Powered by advanced AI and sleek design, our platform offers a <span className='text-blue-500 '>seamless and personalized resume-building experience</span> like no other.</p>

                <section className='my-14 w-full flex flex-col items-center justify-center md:gap-10'>
                    <FadeInWhenVisible>
                        <div className='md:flex-row md:items-center gap-16 flex flex-col items-start md:justify-between p-10 md:p-0  m-auto md:w-9/12  '>
                            <div>
                                <img className='w-full h-11/12 md:w-11/12 md:h-11/12   object-cover rounded-md' src="https://framerusercontent.com/images/z9UGNJzt5GjUtFBiYcvHTAPVn8.png" alt="" />
                            </div>
                            <div className=' '>
                                <h1 className='text-4xl md:w-96  font-semibold'>ATS Optimized</h1>
                                <p className='w-66 font-thin my-4'>  Generate keyword-optimized resumes using AI that pass Applicant Tracking Systems and impress recruiters instantly.</p>
                            </div>

                        </div>
                    </FadeInWhenVisible>


                    <FadeInWhenVisible>
                        <div className='md:flex-row-reverse md:items-center gap-16 flex flex-col-reverse items-start md:justify-between p-10 md:p-0  m-auto md:w-9/12  '>
                            <div>
                                <img className='w-full h-10/12 md:w-11/12 md:h-11/12  object-cover rounded-md' src="https://framerusercontent.com/images/z9UGNJzt5GjUtFBiYcvHTAPVn8.png" alt="" />
                            </div>
                            <div>
                                <h1 className='text-4xl md:w-96  font-semibold'>Image-to-Text with Smart AI Support.</h1>
                                <p className='w-66 font-thin my-4'>  Our AI chatbot transforms images into readable text, enabling faster form processing, smarter automation, and seamless user interaction.</p>
                                <ul className='text-gray-500 my-4 text-xs'>
                                    <li><CheckCircleIcon className='text-blue-400 mx-2' />Accurate text extraction from PNG and scanned documents.</li>
                                    <li><CheckCircleIcon className='text-blue-400 mx-2' />Real-time OCR processing with high precision.</li>
                                    <li><CheckCircleIcon className='text-blue-400 mx-2' />AI understanding for structured and unstructured data.</li>
                                    <li><CheckCircleIcon className='text-blue-400 mx-2' />Streamlined workflows for forms and document automation.</li>
                                </ul>
                            </div>

                        </div>

                    </FadeInWhenVisible>

                    <FadeInWhenVisible>
                        <div className='md:flex-row md:items-center gap-16 flex flex-col items-start md:justify-between p-10 md:p-0  m-auto md:w-9/12   '>
                            <div className=' '>
                                <img className='w-full h-11/12 md:w-11/12 md:h-11/12  object-cover rounded-md' src="https://framerusercontent.com/images/z9UGNJzt5GjUtFBiYcvHTAPVn8.png" alt="" />
                            </div>
                            <div>
                                <h1 className='text-4xl md:w-96  font-semibold'> AI-Powered Text Analysis & Smart Responses</h1>
                                <p className='w-66 font-thin my-4'>  Advanced text analysis helps our AI understand tone, intent, and emotion — delivering more thoughtful and adaptive responses.</p>
                            </div>

                        </div>
                    </FadeInWhenVisible>
                </section>
            </div>
        </>
    )
}

export default Features