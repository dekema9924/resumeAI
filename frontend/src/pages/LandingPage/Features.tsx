

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FadeInWhenVisible from '../../components/FadeInWhenVisible';


function Features() {
    return (
        <>
            <div className='bg-white flex flex-col justify-center items-center pt-22'>
                <p className='text-blue-800 bg-blue-100 border border-blue-300 text-xs w-fit px-4 h-7 flex items-center justify-center rounded-2xl'>
                    <RocketLaunchIcon />POWERFUL FEAUTURES
                </p>
                <h1 className='text-4xl my-2'>What makes ReCV different?</h1>
                <p className='w-10/12 max-w-[600px] text-center text-gray-500'>Powered by advanced AI and sleek design, our platform offers a <span className='text-blue-500 '>seamless and personalized resume-building experience</span> like no other.</p>

                <section className='my-14 w-full flex flex-col items-center justify-center md:gap-10'>
                    <FadeInWhenVisible>
                        <div className='md:flex-row md:items-center gap-16 flex flex-col items-start md:justify-between p-10 md:p-0  m-auto md:w-9/12  '>
                            <div>
                                <img className='w-full h-11/12 md:w-11/12 md:h-11/12   object-cover rounded-md' src="https://framerusercontent.com/images/z9UGNJzt5GjUtFBiYcvHTAPVn8.png" alt="" />
                            </div>
                            <div>
                                <h1 className='text-4xl w-96  font-semibold'>ATS Optimized</h1>
                                <p className='w-66 font-thin my-4'>The advanced analytics & customer insights feature empower business to make data-driven decisions</p>
                            </div>

                        </div>
                    </FadeInWhenVisible>


                    <FadeInWhenVisible>
                        <div className='md:flex-row-reverse md:items-center gap-16 flex flex-col-reverse items-start md:justify-between p-10 md:p-0  m-auto md:w-9/12  '>
                            <div>
                                <img className='w-full h-10/12 md:w-11/12 md:h-11/12  object-cover rounded-md' src="https://framerusercontent.com/images/z9UGNJzt5GjUtFBiYcvHTAPVn8.png" alt="" />
                            </div>
                            <div>
                                <h1 className='text-4xl w-96  font-semibold'>png to text and text to voice support.</h1>
                                <p className='w-66 font-thin my-4'>AI chatbot revolutionizes the way users interact with form the technology, enabling seamless communication.</p>
                                <ul className='text-gray-500 my-4'>
                                    <li><CheckCircleIcon className='text-blue-400 mx-2' />Real time voice transcription.</li>
                                    <li><CheckCircleIcon className='text-blue-400 mx-2' />Natural sounding text to voice conversion.</li>
                                    <li><CheckCircleIcon className='text-blue-400 mx-2' />Noise cancellation and voice clarity.</li>
                                    <li><CheckCircleIcon className='text-blue-400 mx-2' />Voice input for multi step workflows.</li>
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
                                <h1 className='text-4xl w-96  font-semibold'> Analysis & Adaptive Responses</h1>
                                <p className='w-66 font-thin my-4'>analysis enables the AI chatbot to interpret the emotional tone behind user messages, whether text or voice. By analyzing language patterns</p>
                            </div>

                        </div>
                    </FadeInWhenVisible>
                </section>
            </div>
        </>
    )
}

export default Features