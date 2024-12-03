import { MouseEvent } from "react";

function ListGroup() {
    let items = [
        'Brazil',
        'EUA',
        'México',
        'Canadá',
        'Argentina'
    ]

    const EventClick = (event: MouseEvent) => console.log(event)

    return (
    <>
        <h1>Olá</h1>
        {items.length === 0 && <p>Not found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li className="list-group-item" 
                onClick={EventClick} 
                key={item}>{item}</li>
            ))}
        </ul>
    </>  
    );  
}
 
export default ListGroup