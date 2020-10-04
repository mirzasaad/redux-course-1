import API from 'goals-todos-api';
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export function addTodo(todos) {
    return {
        type: ADD_TODO,
        todos
    }
}

export function removeTodos(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

export function toggleTodos(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodos(todo.id))
        return API.deleteTodo(todo.id)
            .catch((error) => {
                addTodo(removeTodos(todo))
                alert('An error occurred')
            })
    }
}

export function handleAddTodo (name, cb) {
    return (dispatch) => {
      return API.saveTodo(name)
        .then((todo) => {
            console.log(addTodo(todo))
          dispatch(addTodo(todo))
        //   cb()
        })
        .catch(() => alert('There was an error. Try again.'))
    }
  }

export function handleToggle (id) {
    return (dispatch) => {
        dispatch(toggleTodos(id))

        return API.saveTodoToggle(id)
        .catch(() => {
            dispatch(toggleTodos(id))
            alert('An error occurred. Try again.')
        })
    }
}