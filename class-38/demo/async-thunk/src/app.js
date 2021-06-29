import './app.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { getRemoteData } from './store/actions'

const App = (props) => {

    const state = useSelector((state)=> {
        return {
            todos: state.todos
        }
    });

    const dispatch = useDispatch();

    return (
        <>
            <button onClick={()=> dispatch(getRemoteData())}>Get TODO List</button>
            <section>
               { state.todos.map((item, idx)=> {
                    return (
                        <div className="todo-item" key={idx}>
                            <h3>{item.text}</h3>
                            <div>{item.difficulty}</div>
                        </div>)
                    })
                }
            </section>
        </>
    )
}

export default App;