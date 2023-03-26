import { Link } from 'react-router-dom'
import { RiFindReplaceLine } from 'react-icons/ri'
import me from '../../assets/me.jpg'

const About = () => {
    return (
        <section className="about">
            <main>
                <h1>About Us</h1>
                <article>
                    <h4>AirFlex - Dronza</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, facilis.</p>
                    <p>Explore the various types of drones. Click below to see the products.</p>
                    <Link to='/'><RiFindReplaceLine /></Link>
                </article>

                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img src={me} alt="Founder" />
                            <h3>Yash Kumar</h3>
                        </div>

                        <p>I am Yash, and I am the founder Lorem ipsum dolor sit amet.</p>
                    </article>
                </div>
            </main>
        </section>
    )
}

export default About