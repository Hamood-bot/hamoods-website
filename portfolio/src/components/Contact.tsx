import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg mb-8">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out through any of these platforms!
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/Hamood-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-2xl mr-2" />
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammad-sabra-2b8403351"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-2xl mr-2" />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://instagram.com/Moesabra"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="text-2xl mr-2" />
                Instagram
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
