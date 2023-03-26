import React from 'react'

const OrderDetails = () => {
    return (
        <section className="orderDetails">
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address</b>
                        {"Lorem ipsum dolor sit"}
                    </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name</b>
                        {"Yash"}
                    </p>
                    <p>
                        <b>Phone No</b>
                        {123456789}
                    </p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status</b>
                        {"Assembling"}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {"23-06-2020"}
                    </p>
                    <p>
                        <b>Delivered At</b>
                        {"24-06-2020"}
                    </p>
                </div>
                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method</b>
                        {"Online"}
                    </p>
                    <p>
                        <b>Payment Reference</b>
                        #{"sdhgshsjsa"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"24-06-2020"}
                    </p>
                </div>
                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items Total</b>
                        ₹{1500}
                    </p>
                    <p>
                        <b>Shipping Charges</b>
                        ₹{200}
                    </p>
                    <p>
                        <b>Taxes</b>
                        ₹{180}
                    </p>
                    <p>
                        <b>Total</b>
                        ₹{1500 + 200 + 180}
                    </p>
                </div>
                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>DJI Mavic Mini</h4>
                        <div>
                            <span>{12}</span> x <span>{250}</span>
                        </div>
                    </div>
                    <div>
                        <h4>JJRC X6</h4>
                        <div>
                            <span>{20}</span> x <span>{400}</span>
                        </div>
                    </div>
                    <div>
                        <h4>E88 Foldable</h4>
                        <div>
                            <span>{15}</span> x <span>{350}</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
                        <div style={{ fontWeight: 800 }}>₹{(12 * 250) + (20 * 400) + (15 * 350)}</div>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default OrderDetails