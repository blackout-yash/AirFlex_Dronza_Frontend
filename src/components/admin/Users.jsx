import me from '../../assets/me.jpg'

const Users = () => {
    const arr = [1, 2, 3, 4]
    return (
        <section className="tableClass">
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Role</th>
                            <th>Since</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((i) => (
                                <tr key={i}>
                                    <td>#sdssdf</td>
                                    <td>Yash</td>
                                    <td><img src={me} alt="User" /></td>
                                    <td>Admin</td>
                                    <td>{"21-01-2020"}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </section>
    )
}

export default Users