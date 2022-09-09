import './App.css';

import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.index);
  console.log(index);
  const increase = () => {
    dispatch({ type: 'ADD', payload: 1 });
  };

  const decrease = () => {
    dispatch({ type: 'GET', payload: 1 });
  };

  return (
    <>  
      <button
        type="button"
        onClick={increase}
      >Increase</button>
      <button
        type="button"
        onClick={decrease}
      >Decrease</button>
    </>
  );
}

export default App;
