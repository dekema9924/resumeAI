import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import { motion } from 'motion/react';

const Pricing = () => {
    return (
        <>
            <div id='pricing' className='mb-22'>
                <h1 className='text-4xl font-semibold w-96 text-center m-auto mt-22'>No hidden charges. Choose your plan now</h1>
                <p className='text-blue-500 font-semibold m-auto w-96 text-center my-4'>Try ReCV completely free. Upgrade to explore advanced features. </p>


                <div className=' flex md:flex-row flex-col  items-center p-5 justify-center gap-5 '>
                    {/* //free */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        viewport={{ amount: 0.5 }}
                        className=' md:w-96 w-11/12  bg-white rounded-2xl p-6 flex flex-col gap-4 h-96  justify-center'>
                        <p className='font-bold text-xl'>Starter</p>
                        <p className='text-lg font-thin w-66'>Perfect for small businesses just starting with CRM management.</p>
                        <h1 className='text-4xl font-semibold'>Free <span className='text-lg font-normal'>/mo</span></h1>
                        <ul className='font-thin text-lg flex flex-col gap-2'>
                            <li><CheckCircleIcon className='text-green-500' />1 resume downlaod</li>
                            <li><CheckCircleIcon className='text-green-500' />ATS optimization</li>
                            <li><CheckCircleIcon className='text-green-500' />AI feedback</li>
                        </ul>
                        <button className=' w-66 h-9 rounded-3xl cursor-pointer cursor-pointe bg-blue-500 text-white font-bold'>Get started</button>
                    </motion.div>


                    {/* //premuim */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        viewport={{ amount: 0.5 }}
                        className=' md:w-96 w-11/12  rounded-2xl p-6 flex flex-col gap-4 h-96 bg-blue-500 text-white justify-center'>
                        <p className='font-bold text-xl flex items-center gap-2'>Premuim<VerifiedIcon className='text-blue-500' /></p>
                        <p className='text-lg font-thin w-66'>Ideal for advanced resume.</p>
                        <h1 className='text-4xl font-semibold'>$5<span className='text-lg font-normal'>/mo</span></h1>
                        <ul className='font-thin text-lg flex flex-col gap-2'>
                            <li><CheckCircleIcon className='text-green-500' />unlimited resume downlaod</li>
                            <li><CheckCircleIcon className='text-green-500' />ATS optimization</li>
                            <li><CheckCircleIcon className='text-green-500' />Advanced AI feautures</li>
                            <li><CheckCircleIcon className='text-green-500' />Cover Letters</li>


                        </ul>
                        <button className=' w-66  h-9 rounded-3xl cursor-pointe bg-white text-black  font-bold cursor-pointer'>Get started</button>

                    </motion.div>

                    {/* //enterprise */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        viewport={{ amount: 0.5 }}
                        className='md:w-96 w-11/12  bg-white rounded-2xl p-6 flex flex-col gap-4 h-96  justify-center'>
                        <p className='font-bold text-xl flex items-center gap-2'>Enterprise</p>
                        <p className='text-lg font-thin w-66'>  COMMING SOON.</p>

                    </motion.div>
                </div>
            </div>
        </>
    )
}


export default Pricing;