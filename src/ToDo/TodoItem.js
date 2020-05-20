import React from "react";
import './Todo.css';
import PropTypes from 'prop-types';



const styles = {
    li:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'.5rem 1rem',
        border:'1px solid #ccc',
        borderRadius:'4px',
        marginBottom: '.5rem'
    },
    input:{
        marginRight:'1rem'
    }
}

 function  ToDoItem(props) {
    console.log('todo', props.todo)
    return(
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input} onChange={()=>props.onChange(props.todo.id)}/>
                <strong>{props.index + 1}</strong>
                &nbsp;
                {props.todo.title}
            </span>
            <button className="toDoItemButton" >&times;</button>
        </li>
    )
}

ToDoItem.propTypes= {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default ToDoItem