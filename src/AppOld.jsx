import { useRef, useState } from 'react';
import { Text } from './components/Text';

function App() {
  const initialUserData = useRef({
    firstName: 'Alvison',
    lastName: 'Hunter'
  });

  const [user, setUser] = useState(initialUserData.current);

  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle ? <Text /> : null}

      <p>
        {user.firstName} {user.lastName}
      </p>
      <button
        onClick={() =>
          setUser((prev) => ({
            ...prev,
            firstName: 'Ezra'
          }))
        }
      >
        Change name to Ezra
      </button>
      <button
        onClick={() =>
          setUser({
            ...user,
            lastName: 'Ruiz'
          })
        }
      >
        Change lastName to Ruiz
      </button>

      <button onClick={() => setUser(initialUserData.current)}>
        Reset User initial values
      </button>

      <button onClick={() => setToggle((prev) => !prev)}>click</button>
    </>
  );
}

export default App;
