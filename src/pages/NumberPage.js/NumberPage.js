import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddNumberAction, NumberValueAction, addToTotalSumAction } from '../../redux/actions';

function NumberPage() {
  const dispatch = useDispatch();
  const { value, numbers } = useSelector((state) => state.NumberReducer);
  const [inpValue, setInpValue] = useState('');

  const numbValue = () => {
    if (!isNaN(inpValue)) {
      dispatch(NumberValueAction(inpValue));
      dispatch(AddNumberAction(inpValue)); 
      setInpValue('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      <input
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
        type='number'
      ></input>
      <button onClick={numbValue}>ADD</button>
      {value}
      <div>Total Sum: {numbers}</div>
    </div>
  );
}

export default NumberPage;
