import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    (async function() {
      const x = await fetch(`${process.env.REACT_APP_API_SERVER}/users`, { method: 'GET', headers: {
        'Content-Type': 'application/json'
      }});

      const data = await x.json();
      setUsers(data.data)
    })()
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        users
        <ul>
          { users.length !== 0 && users.map(( user ) => {
            return <li key={user}>{user.name}</li>
          })}
        </ul>
      {/* </header> */}
    </div>
  );
}

export default App;
