import { useState } from 'react';

export const useCounter = (initialCount = 5) => {
  const [count, setCount] = useState(initialCount);

  const updateCount = (operation, quantity = 1) => {
    if (operation === 'increment') {
      setCount(count + quantity);
      return;
    }

    if (operation === 'decrement') {
      setCount(count - quantity);
      return;
    }

    if (operation === 'reset') {
      setCount(initialCount);
      return;
    }

    throw new Error('The specified operation does not exist');
  };

  return {
    count,
    updateCount
  };
};
