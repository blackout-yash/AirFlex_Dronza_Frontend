import { motion } from 'framer-motion'
import founder from '../../assets/me.jpg'

const Founder = () => {
    const options = {
        initial: { x: "-100%", opacity: 0 },
        whileInView: { x: 0, opacity: 1 }
    }
    return <section className="founder">
        <motion.div {...options}>
            <img src={founder} alt="founder" height={200} width={200} />
            <h3>Yash Kumar</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque Lorem ipsum?<br />
                Our Aim is Lorem ipsum dolor sit amet.
            </p>
        </motion.div>
    </section>
}

export default Founder