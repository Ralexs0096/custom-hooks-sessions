import { useEffect } from 'react';

export const Text = () => {
  useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('dismounted');
    };
  }, []);

  return <div>Maria Juaquina</div>;
};
