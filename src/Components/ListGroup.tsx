function ListGroup() {
    const items = [
        'Brazil',
        'EUA',
        'México',
        'Canadá',
        'Argentina'
    ]

    return (
    <>
        <h1>Olá</h1>
        <ul className="list-group">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </> 
    ); 
}

export default ListGroup