import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  const socialVariants = {
    hover: { scale: 1.1, y: -2 },
    tap: { scale: 0.95 },
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mohammad Sabra
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Software Developer & University Student
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="https://github.com/Hamood-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center"
              variants={socialVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <FaGithub className="mr-2 text-xl" />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohammad-sabra-2b8403351"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center"
              variants={socialVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <FaLinkedin className="mr-2 text-xl" />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://instagram.com/Moesabra"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center"
              variants={socialVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <FaInstagram className="mr-2 text-xl" />
              Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
