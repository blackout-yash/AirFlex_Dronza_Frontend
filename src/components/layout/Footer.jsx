import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>AirFlex - Dronza</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <br />
                <em>We all need people who will give us Feedback!</em>
                <strong>All rights reserved @airflex.drone</strong>
            </div>

            <aside>
                <h4>Follow Us</h4>
                <a href="https://www.instagram.com/yash.raj_2002/" target='_blank' rel="noreferrer">< AiFillInstagram /></a>
                <a href="https://github.com/blackout-yash" target='_blank' rel="noreferrer">< AiFillGithub /></a>
                <a href="https://twitter.com/YashKum42290136" target='_blank' rel="noreferrer">< AiFillTwitterCircle /></a>
            </aside>
        </footer>
    )
}

export default Footer