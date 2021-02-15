import {useDispatch, useSelector} from 'react-redux'
import {increaseAsync} from '../modules/counter'
const Counter1 = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.counter)
  console.log('this is state',state)
  const handleIncrese = () => {
    dispatch(increaseAsync())
  }
  return ( 
    <div>
      this is counter
      <button onClick={handleIncrese}>increse</button>
      <div>{state}</div>
    </div>
   );
}
 
export default Counter1;