import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import User from './components/User/User';
import fakeData from './fakeData/users_20.json';

function App() {

  const [users, setUsers] = useState([])
  const [cart, setCart] = useState([]);
  const [containerStyle, setContainerStyle] = useState({backgroundColor: 'white'});

  useEffect(() => {
    setUsers(fakeData);
  }, [])

  return (
      <div className="App">
          <Cart cart={cart} />
          <div
              className="container"
              style={containerStyle}
              onScroll={(e) => {
                  if (e.target.scrollTop >= 800) {
                      setContainerStyle({ backgroundColor: "grey" });
                  } else if (e.target.scrollTop >= 500) {
                      setContainerStyle({ backgroundColor: "lightcyan" });
                  } else if (e.target.scrollTop >= 200) {
                      setContainerStyle({ backgroundColor: "teal", color: "white" });
                  } else {
                      setContainerStyle({ backgroundColor: "white" });
                  }
              }}
          >
              <h1>The Leet</h1>

              {users.map((user) => (
                  <User user={user} handleAddUser={handleAddUser} key={user.id} />
              ))}
          </div>
      </div>
  );


  function handleAddUser(user) {
    console.log(user.name);
    const newCart = cart.includes(user)? cart.filter(u => u !== user) : [...cart, user];
    setCart(newCart);
  }

}

export default App;
