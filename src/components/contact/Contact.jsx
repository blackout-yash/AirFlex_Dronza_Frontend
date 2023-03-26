import { motion } from 'framer-motion'
import drone from '../../assets/drone4.png'

const Contact = () => {
    const options1 = {
        initial: { x: "-100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { delay: 0.2 }
    }

    const options2 = {
        initial: { x: "100vh", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { delay: 0.2 }
    }

    const option3 = {
        initial: { x: "50%", y: "-100vh", opacity: 0 },
        animate: { x: "50%", y: "-50%", opacity: 1 }, transition: { delay: 0.4 }
    }

    return (
        <section className="contact">
            <motion.form {...options1}>
                <h2>Contact Us</h2>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <textarea cols="30" rows="10" placeholder='Message...'></textarea>
                <button type="submit">Send</button>
            </motion.form>
            <motion.div {...options2} className="border">
                <motion.div {...option3}>
                    <img src={drone} alt="buger" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact