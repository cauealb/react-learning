import ListGroup from "./Components/ListGroup"

function App(){
  let items = [
    'Brazil',
    'EUA',
    'México',
    'Canadá',
    'Argentina'
]

const handleSelect = (items: string) => {
  console.log(items)
}

  return <div><ListGroup items={items} head="Países" onSelectIndex={handleSelect}/></div>
}

export default App