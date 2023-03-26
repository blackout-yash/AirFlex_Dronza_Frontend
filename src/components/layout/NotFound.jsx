import { Link } from 'react-router-dom'
import { MdError } from 'react-icons/md'

const NotFound = () => {
    return (
        <section className="notFound">
            <main>
                <div>
                    <MdError />
                    <h1>404</h1>
                </div>
                <p>Page Not Found</p>
                <Link to='/'>Go to Home</Link>
            </main>
        </section>
    )
}

export default NotFound