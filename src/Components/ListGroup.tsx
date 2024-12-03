import { useState } from "react";
interface Props {
    items: string[]
    head: string
    onSelectIndex: (items: string) => void
}

function ListGroup({items, head, onSelectIndex}: Props) {

    const [selectIndex, selectFunction] = useState(-1)

    return (
    <>
        <h1>{head}</h1>
        {items.length === 0 && <p>Not found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li className={selectIndex === index ? "list-group-item active" : "list-group-item"} 
                onClick={() => {selectFunction(index); onSelectIndex(item)}} 
                key={item}>{item}</li>
            ))}
        </ul>
    </>  
    );  
}
 
export default ListGroup