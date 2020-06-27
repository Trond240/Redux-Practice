import React from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../actions';

const ToDo = ({ id, todo, completed, toggleToDo}) => {
  return (
    <li
        className={completed ? 'completed' : 'not-completed'}
        >
        {todo}
        <button onClick={() => toggleToDo(id)}>Complete</button>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
    toggleToDo: id => dispatch( toggleToDo(id))
})

export default connect(null, mapDispatchToProps)(ToDo);