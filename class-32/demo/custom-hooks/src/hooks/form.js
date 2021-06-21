import {useState} from 'react';

const useForm = (callback) => {
    const [values, setValues] = useState({});

    const handleSubmit = (e) => {
        // after submitting my form
        console.log("inside handleSubmit", values)
        e.preventDefault();
        e.target.reset();
        console.log(callback);
        callback(values);
    }

    const handleChange = (e) => {
        // updating the state 
        // for field name that I am changing on add/update 
        // with the new value
        console.log("inside handleChange", {[e.target.name]: e.target.value})
        setValues({...values, [e.target.name]: e.target.value});
    }
    return [handleSubmit, handleChange, values];
}

export default useForm;