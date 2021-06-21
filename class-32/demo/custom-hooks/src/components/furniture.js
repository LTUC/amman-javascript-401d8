import useForm from '../hooks/form'

function Furniture() {

    const [handleSubmit, handleChange, values] = useForm(cb);

    function cb(myValues) {
        console.log("inside Furniture comp: ", myValues);
        // an API call to do sth with the values
    }

    return (
        <>
            <h2>Furniture form using form hook</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name="item"
                    type="text"
                    placeholder="Item Name"
                    onChange={handleChange}/>
                <input 
                    name="price"
                    type="number"
                    placeholder="Price"
                    onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            {
                Object.entries(values).map((entry, idx)=>{
                    return <p key={idx} >{entry[0]}: {entry[1]}</p>
                })
            }
        </>
    )
}

export default Furniture;