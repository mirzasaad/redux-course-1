import React from 'react'
import { handleInitialData } from '../actions/shared'
import { connect, useSelector, useDispatch } from 'react-redux';
import Goals from './Goals';
import Todos from './Todos';

export default function App (props) {
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch]);

  if (loading) return <div>Loading</div>

  return (
    <div>
      <Goals />
      <Todos />
    </div>
  )
}
