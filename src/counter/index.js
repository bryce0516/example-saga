import {useDispatch, useSelector} from 'react-redux'
import {increaseAsync,decreaseAsync} from '../modules/counter'
const Counter1 = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.counter)
  console.log('this is state',state)
  const handleIncrease = () => {
    dispatch(increaseAsync())
  }
  const handleDecrease = () => {
    dispatch(decreaseAsync())
  }
  return ( 
    <div>
      this is counter
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
      <div>{state}</div>
    </div>
   );
}
 
export default Counter1;