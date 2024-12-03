import { useState } from "react";

function ListGroup() {
    let items = [
        'Brazil',
        'EUA',
        'México',
        'Canadá',
        'Argentina'
    ]

    const [selectIndex, selectFunction] = useState(-1)

    return (
    <>
        <h1>Olá</h1>
        {items.length === 0 && <p>Not found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li className={selectIndex === index ? "list-group-item active" : "list-group-item"} 
                onClick={() => {selectFunction(index)}} 
                key={item}>{item}</li>
            ))}
        </ul>
    </>  
    );  
}
 
export default ListGroup