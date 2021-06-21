import useForm from '../hooks/form'
import {useState} from 'react';
function Food() {

    const [foodValues, setFoodValues] = useState({});
    const [handleSubmit, handleChange, values] = useForm(cb);

    function cb(myValues) {
        console.log("inside food comp: ", myValues);
        setFoodValues(myValues);
        // an API call to do sth with the values
    }

    return (
        <>
            <h2>food form using form hook</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name="food"
                    type="text"
                    placeholder="Food Name"
                    onChange={handleChange}/>
                <input 
                    name="calories"
                    type="number"
                    placeholder="Calories"
                    onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            {
                Object.entries(values).map((entry, idx)=>{
                    return <p key={idx} >{entry[0]}: {entry[1]}</p>
                })
            }
            <hr/>
            {
                Object.entries(foodValues).map((entry, idx)=>{
                    return <p key={idx} >{entry[0]}: {entry[1]}</p>
                })
            }
        </>
    )
}

export default Food;