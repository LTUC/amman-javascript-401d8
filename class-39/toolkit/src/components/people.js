import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {add, remove, get} from '../rtk-store/people';

const People = props => {
    // component local state and not store state
    const [name, setName] = useState('');
    
    const state = useSelector(state=> {
        return {
            people: state.people
        }
    });
    const dispatch = useDispatch();

    // call the api on the inital Render
    useEffect(() => {
        dispatch(get());
    }, []);

    const handleChange = e=> {
        setName(e.target.value);
    }

    const handleSubmit = e => {
        e.target.reset();
        e.preventDefault();
        dispatch(add(name));
        
        // setName('');
    }

    return (
        <>
            <ul>{state.people.map((person, idx)=> {
                return (
                    <li
                        onClick={()=> dispatch(remove(person))}
                        key={idx}>
                            <h3>{person}</h3>
                    </li>
                )
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <input 
                    name="name"
                    onChange={handleChange}/>
            </form>
        </>
    )
}

export default People;