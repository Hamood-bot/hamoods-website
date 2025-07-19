import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved to tia william william my back bone my will to live
            
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
