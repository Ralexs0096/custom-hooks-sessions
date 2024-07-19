import { useCounter } from '../hooks/useCounter';

const Counter = () => {
  const { count, updateCount } = useCounter(10);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => updateCount('increment')}>+1</button>
      <button onClick={() => updateCount('decrement')}>-1</button>
      <button onClick={() => updateCount('reset')}>Reset</button>
    </>
  );
};

export default Counter;
