import React,{useState} from 'react'
import UserTable from './components/usertable.js';
import{v4 as uuidv4} from 'uuid';
import AddUserForm from './components/adduserform.js';
import EditUserForm from './components/edituserform.js';


const App = () => {
  const usersData=[
    {id:uuidv4(), name:'Fleur', username:'floppy'},
    {id:uuidv4(), name:'Karl', username:'frid'},
    {id:uuidv4(), name:'Ben', username:'joshua'}

  ]

  //state of users
  const[users, setUser]=useState(usersData);
  
  //add ussers
  const addUser=(user)=>{
    user.id=uuidv4()
    setUser([...users,user])
  }

  //delete users
  const deleteUser=(id)=>{
    
    setUser(users.filter(user=> user.id !== id))


  }
  //edit user
  const [editing, setEditing]=useState(false)//allows to display the form to add or edit user

  const [currentUser, setCurrentUser] = useState({
    id: null, name:'', username: ''
  });

  const editRow=(user)=>{

    setEditing(true);
    setCurrentUser({
      id: user.id,name: user.name, username:user.username 
    })
  }
  const updateUser=(id, updateUser)=>{
    setEditing(false)

    setUser(users.map(user=>(user.id === id ? updateUser: user)))
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser}
                />  
              </div>
              ):(
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
              </div>
              )
          }
         </div> 
          
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          ></UserTable>  
        </div>
      </div>
    </div>
    
    )
}

export default App
