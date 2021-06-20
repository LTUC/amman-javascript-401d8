import { useState, useEffect } from "react";
import {Button} from 'react-bootstrap';

function People() {
   const [char, setChar] = useState(['Ishaq']);
   const [newChar, setNewChar] = useState('');

   const addChar = (e)=> {
        setChar([...char, newChar]);
        setNewChar('');
   }

   const changeNewChar = (e) => {
        setNewChar(e.target.value);
   }

    // this will happen on every re-render in this component 
   useEffect(()=> {
       console.log("%c any re-render'",  'background: orange; color: whitesmoke');
   });
   // this will run whenver newChar is changed
   useEffect(()=> {
       console.log(`%c newChar is being changed ${newChar}`, 'background: cyan; color: yellow');
   }, [newChar]);

   useEffect(()=> {
        console.log(`%c char is being changed ${char}`,  'background: salmon; color: lightblue');
    }, [char] );

    //this will happen after the initial render ONLY
    useEffect(()=> {
        console.log(`ONCE ONLY`);
    }, []);

    // component will unmount 
    useEffect(()=> {
        return ()=> {
            console.log(' %c UNMOUNTING ... BYEEEEE', 'background: black; color: white')
        }
    }, []);

   return (
        <>
            {
                char.map((item, idx)=><div key={idx}>{item}</div> )
            }
            <input type="text" onChange={changeNewChar} value={newChar} />
            <Button onClick={addChar}>Add New</Button>
        </>
       
   )
}

export default People;