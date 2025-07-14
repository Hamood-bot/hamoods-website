import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Hi! I'm Mohammad Sabra, a passionate software developer and university student. 
              I'm constantly learning and exploring new technologies to expand my skillset.
            </p>
            <p className="text-lg mb-6">
              Currently, I'm focused on Python and C# development, with experience in building
              various applications and solutions. I enjoy tackling complex problems and turning
              ideas into reality through code.
            </p>
            <p className="text-lg">
              When I'm not coding or studying, I'm probably exploring new technologies,
              contributing to open-source projects, or learning about the latest developments
              in the tech world or playing roblox.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
