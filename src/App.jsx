import useFetch from './hooks/useFetch';

function App() {
  const { data, isLoading } = useFetch(
    `https://dental-clinic-be.onrender.com/user`
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.map((user) => (
          <p key={user.id}>
            {user.firstName} {user.password}
          </p>
        ))
      )}
    </>
  );
}

export default App;
