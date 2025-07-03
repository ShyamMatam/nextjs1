
// fetch
const fetchData = async () => {

    try {
    // const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    return data.users;
    } catch (error) {
        throw new Error('Error fetching data:', error);
    }

}


const DataFetchingPage = async () => {
    const data1 = await fetchData();
    console.log(data1);

    return (
        <div>
            <h1>Data Fetching Example</h1>
            {/* <ul>
                {data.users.map(user => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default DataFetchingPage;