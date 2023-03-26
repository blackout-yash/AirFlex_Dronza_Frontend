import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    const options = {
        initial: { y: "-100vh" },
        animate: { y: 0 }
    }

    return (
        <section className="login">
            <motion.button {...options}>
                Login with Google
                <FcGoogle />
            </motion.button>
        </section>
    )
}

export default Login