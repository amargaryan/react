import React from "react";
import './Todo.css';
import ToDoItem from "./TodoItem";
import PropTypes from 'prop-types';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}


function TodoList(props) {
    return (
        <ul className="asd" style={styles.ul}>
            {props.gago.map((todo,  index) => {
                    return <ToDoItem gago ={props.gago} props todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
                }
            )}
        </ul>
    )
}

TodoList.propTypes = {
    gago: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList