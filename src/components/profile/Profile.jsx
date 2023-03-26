import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import user from '../../assets/me.jpg'
import { MdDashboard } from 'react-icons/md'

const Profile = () => {
    const options1 = {
        initial: { y: "-100%", opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }
    const options2 = {
        initial: { x: "-100vh", opacity: 0 },
        animate: { x: 0, opacity: 1 }
    }

    return (
        <section className="profile">
            <main>
                <motion.img src={user} alt="user" {...options1} />
                <motion.h5 {...options1} transition={{ delay: 0.3 }}>Yash</motion.h5>
                <motion.div {...options1} transition={{ delay: 0.5 }}>
                    <Link to='/admin/dashboard'
                        style={{
                            borderRadius: 0,
                            backgroundColor: "rgb(40,40,40)",
                            color: "white",
                            fontWeight: "normal",
                        }}
                    > <MdDashboard />Dashboard</Link>
                </motion.div>
                <motion.div {...options2} transition={{ delay: 0.5 }}>
                    <Link to='/myorders'>Orders</Link>
                </motion.div>
                <motion.button {...options2} transition={{ delay: 0.3 }}>Logout</motion.button>
            </main>
        </section>
    )
}

export default Profile