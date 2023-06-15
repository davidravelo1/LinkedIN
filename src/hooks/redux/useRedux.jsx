import { useDispatch, useSelector } from "react-redux"

function useRedux(callback) {
  const selector = useSelector(callback);
  const dispatch = useDispatch();
  
  return { selector, dispatch }
}

export default useRedux