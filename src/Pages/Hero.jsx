import { motion } from 'framer-motion';
// import { button } from '@/components/ui/button'; // if using shadcn or customize yours
import heroImg from '../assets/tech.jpg'; // Replace with your image path
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Content */}
      <motion.div 
        className="max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Empowering Digital Growth with <span className="text-blue-600">Emmark-Tech</span>
        </h1>
        <p className="mt-10 text-lg text-gray-600 font-bold">
          We build sleek digital products, scalable web solutions, and transform ideas into high-performing realities. <span className='text-gray-900'>Join us on your tech journey.</span>
        </p>
        <div className="mt-8 flex gap-4">
          <Link to={'/contact'}>
          <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-xl text-md">
            Get Started
          </button></Link>
          <Link to={'/about'}>
          <button variant="outline" className="px-6 py-3  bg-gray-300 hover:bg-gray-400 border-gray-300 text-gray-700 rounded-xl">
            Learn More
          </button></Link>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="mt-10 md:mt-0 w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={heroImg} alt="Emmark Hero" className="w-full rounded-3xl shadow-xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
