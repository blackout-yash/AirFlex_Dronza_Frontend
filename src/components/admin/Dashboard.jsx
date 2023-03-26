import { Link } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJs, Tooltip, ArcElement, Legend } from 'chart.js'
import Loader from '../layout/Loader'

ChartJs.register(Tooltip, ArcElement, Legend)

const Box = ({ title, value }) => {
    return (
        <div>
            <h3>
                {title === "Income" && "₹"}
                {value}
            </h3>
            <p>{title}</p>
        </div>
    )
}

const loading = false;

const Dashboard = () => {
    const data = {
        labels: ["Assembling", "Shipped", "Delivered"],
        datasets: [
            {
                label: "# of orders",
                data: [2, 3, 4],
                backgroundColor: [
                    "rgb(255,94,5,0.1)",
                    "rgb(64,63,69,0.2)",
                    "rgb(218,193,7,0.3)"
                ],
                borderColor: [
                    "rgb(255,94,5)",
                    "rgb(64,63,69)",
                    "rgb(218,193,7)"
                ],
                borderWidth: 1
            }
        ]
    }
    return (
        <section className="dashboard">
            {
                loading === false ?
                    <main>
                        <article>
                            <Box title="Users" value={213} />
                            <Box title="Orders" value={3232} />
                            <Box title="Income" value={1400} />
                        </article>
                        <section>
                            <div>
                                <Link to='/admin/orders'>View Orders</Link>
                                <Link to='/admin/users'>View Users</Link>
                            </div>
                            <aside>
                                <Doughnut data={data} />
                            </aside>
                        </section>
                    </main>
                    : <Loader />
            }
        </section>
    )
}

export default Dashboard