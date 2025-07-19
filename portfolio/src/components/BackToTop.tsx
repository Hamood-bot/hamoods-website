import { motion, useScroll, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const BackToTop = () => {
  const { scrollYProgress } = useScroll()
  const controls = useAnimationControls()

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (latest > 0.2) {
        controls.start({ opacity: 1, y: 0 })
      } else {
        controls.start({ opacity: 0, y: 20 })
      }
    })
  }, [scrollYProgress, controls])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-colors z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  )
}

export default BackToTop
