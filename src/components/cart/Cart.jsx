import { Link } from 'react-router-dom'
import drone1 from '../../assets/drone1.png'
import drone2 from '../../assets/drone2.png'
import drone3 from '../../assets/drone3.png'

const CartItem = ({ value, title, img, increment, decrement }) => {
    return (
        <div className="cartItem">
            <div>
                <h4>{title}</h4>
                <img src={img} alt={title} />
            </div>
            <div>
                <button onClick={decrement}>-</button>
                <input type="number" readOnly value={value} />
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}


const Cart = () => {
    const increment = (item) => { };
    const decrement = (item) => { };

    return (
        <section className="cart">
            <main>
                <CartItem
                    title={"DJI Mavic Mini"}
                    img={drone1}
                    value={0}
                    increment={() => increment(1)}
                    decrement={() => decrement(1)}
                />
                <CartItem
                    title={"JJRC X6"}
                    img={drone2}
                    value={0}
                    increment={() => increment(2)}
                    decrement={() => decrement(2)}
                />
                <CartItem
                    title={"E88 Foldable"}
                    img={drone3}
                    value={0}
                    increment={() => increment(3)}
                    decrement={() => decrement(3)}
                />

                <article>
                    <div>
                        <h4>Sub Total</h4>
                        <p>₹{20000}</p>
                    </div>
                    <div>
                        <h4>Tax</h4>
                        <p>₹{20000 * 0.18}</p>
                    </div>
                    <div>
                        <h4>Shipping Charges</h4>
                        <p>₹{1599}</p>
                    </div>
                    <div>
                        <h4>Sub Total</h4>
                        <p>₹{20000 + (20000 * 0.18) + 1599}</p>
                    </div>
                    <Link to='/shipping'>Checkout</Link>
                </article>
            </main>
        </section>
    )
}

export default Cart