import API from 'goals-todos-api'
import App from '../components/App'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

export function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}

export function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id
    }
}

export function handleDeleteGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id))
        API.deleteGoal(goal.id)
            .catch(() => {
                dispatch(addGoal(goal))
                alert('An error occurred')
            })
    }
}

export function handleAddGoal(name, callback) {
    return (dispatch) => {
        API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoal(goal))
                callback()
            })
            .catch((error) => {
                console.log('error', error)
                alert('Ann error occurred when saving goal')
            });
    }
}