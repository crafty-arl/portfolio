import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export function FunProfileCard() {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col h-full ${theme.background} p-4 font-primary`}>
      <motion.div
        className="relative w-full h-full rounded-none shadow-none overflow-hidden cursor-pointer flex flex-col items-center justify-center"
        style={{
          perspective: '1000px',
        }}
        animate={{
          rotateY: isHovered ? 15 : 0,
          rotateX: isHovered ? -15 : 0,
          transition: { duration: 0.3 },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className={`w-full h-full ${theme.background} p-4 sm:p-8 flex flex-col justify-center items-center`}
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={{
            translateZ: isHovered ? '50px' : '0px',
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col items-center space-y-4 mb-4">
              <div className="w-48 h-48">
                <img src="src/assets/gmcarl.png" alt="Profile Icon" className="w-full h-full object-contain" />
              </div>
              <span className={`${theme.text} text-2xl text-center`}>Aaron "Carl" Lewis</span>
              <span className={`${theme.text} text-xl text-center`}>GM! Carl</span>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={theme.text}>
                  <FaFacebook size={32} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={theme.text}>
                  <FaTwitter size={32} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={theme.text}>
                  <FaInstagram size={32} />
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-4 mt-4">
              <div className={theme.text}>Project A</div>
              <div className={theme.text}>Project B</div>
              <div className={theme.text}>Project C</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}