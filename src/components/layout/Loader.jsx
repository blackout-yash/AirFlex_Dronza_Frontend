import { FaInnosoft } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Loader = () => {
    const options = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        transition: {
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            duration: 3
        }
    };

    return (
        <div className="loader">
            <FaInnosoft />
            <div>
                <motion.p {...options}>
                    Loading...
                </motion.p>
            </div>
        </div>
    )
}

export default Loader