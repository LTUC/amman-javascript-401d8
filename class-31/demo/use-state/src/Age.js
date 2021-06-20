import {useState} from 'react';

function Age(props) {
    // Returns a stateful value, and a function to update it.
    const [name, setName] = useState('test name');
    const [age, setAge] = useState(parseInt(props.age) || 18);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateAge = (e) => {
        console.log(typeof age , age);
        // what if we update it directly ?
        // age = age + 1;
        setAge(age + 1);
    }

    return (
        <>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <div><input type="text" onChange={updateName}/></div>
            <button onClick={updateAge}>Increment</button>
        </>
    )
}

export default Age;