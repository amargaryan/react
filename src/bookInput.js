import React, {useState} from "react";
import firebase from "firebase";



function useFormField(initialValue) {
    const [value, setValue] = useState(initialValue);

    function onChange(event) {
        setValue(event.target.value);
    }

    return {
        value,
        onChange,
    };
}

export default function BookInput({book}){
    // const name = useFormField(book.name);
    const [name, setName] = useState(book.name)

    const onUpdate = () => {
        const db = firebase.firestore();
        db.collection('books').doc(book.id).set({...book, name});
    }

    const onDelete = () => {
        const db = firebase.firestore();
        db.collection('books').doc(book.id).delete();
    }

    return(
        <>
            <input value={name}
            onChange= {e =>{
                setName(e.target.value)
            }

            }
            />
            <button onClick={onUpdate}>Update</button>
            <button onClick={onDelete}>Delete</button>

        </>
    )
}