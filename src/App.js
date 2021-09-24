import React ,{useState}from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
 const [userList,setUserlist]= useState([{name:"Rahul Mahato",age:"22",id:"g1"},{name:"Sonal kumari",age:"18",id:"g2"}]);
 const addUserHandler=(uName,uAge)=>{
  setUserlist((prevUsersList)=>{
    return [...prevUsersList,{name:uName, age:uAge, id:Math.random().toString()}];

  });
 }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
