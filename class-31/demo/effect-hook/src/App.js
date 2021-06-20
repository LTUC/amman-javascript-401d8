import People from './People'
import {useState} from 'react'
import {Button} from 'react-bootstrap'
function App() {
    const [show, setShow] = useState(true);
    return (
      <>
        <Button size="sm"
        variant="danger" 
        onClick={()=> setShow(!show)}> CLick Me</Button>
        {show ? <People/> : null}
      </>
    )
}

export default App;
