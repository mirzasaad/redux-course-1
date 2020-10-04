import * as React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';
import List from './List'
import { handleAddGoal, handleDeleteGoal } from '../actions/goals'

export default function Goals(props) {
    const goals = useSelector(state => state.goals);
    const dispatch = useDispatch()

    const inputEl = React.useRef(null);
    const addItem = (e) => {
        e.preventDefault()

        dispatch(handleAddGoal(inputEl.current.value, () => {
            inputEl.current.value = ''
        }));
    }
    const removeItem = (goal) => dispatch(handleDeleteGoal(goal))

    return (
        <div>
          <h1>Goals</h1>
          <input
            type='text'
            placeholder='Add Goal'
            ref={inputEl}
          />
          <button onClick={(e) => addItem(e)}>Add Goal</button>
  
          <List
            items={goals}
            remove={removeItem}
          />
        </div>
      )
}
