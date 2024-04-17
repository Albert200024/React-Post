import './App.css';
import Post from './post/Post';

function App() {

  return (
    <div className="App">
        <h1>Hello</h1>
        {/* {users && <UserList users={users} title = "All users!" handleDelete = {handleDelete} />} */}

        <Post/>
    </div>
  );
}

export default App;
