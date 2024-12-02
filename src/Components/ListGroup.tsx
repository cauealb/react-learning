function ListGroup() {
    let items = [
        'Brazil',
        'EUA',
        'México',
        'Canadá',
        'Argentina'
    ]

    // items = []

    return (
    <>
        <h1>Olá</h1>
        {items.length === 0 && <p>Not found</p>}
        <ul className="list-group">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </> 
    ); 
}

export default ListGroup 