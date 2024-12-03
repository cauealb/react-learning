import ListGroup from "./Components/ListGroup"

function App(){
  let items = [
    'Brazil',
    'EUA',
    'México',
    'Canadá',
    'Argentina'
]
  return <div><ListGroup items={items} head="Países" /></div>
}

export default App