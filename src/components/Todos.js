import * as React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from '../actions/todos'

export default function Todos(props) {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()
    const inputEl = React.useRef(null);

    const addItem = (e) => {
        e.preventDefault()
        dispatch(handleAddTodo(inputEl.current.value));
    }

    const removeItem = (todo) => dispatch(handleDeleteTodo(todo))
    const toggleItem = (id) => dispatch(handleToggle(id))

    return (
        <div>
          <h1>Todo List</h1>
          <input
            type='text'
            placeholder='Add Todo'
            ref={inputEl}
          />
          <button onClick={(e) => addItem(e)}>Add Todo</button>
  
          <List
            toggle={toggleItem}
            items={todos}
            remove={removeItem}
          />
        </div>
      )
}
