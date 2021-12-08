import React,{useState,useEffect}from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { FormControl,Input,InputLabel } from '@mui/material';
import Todo from './List';
import {db} from './firebase';
import { getFirestore, collection, getDocs,addDoc,setDoc ,doc} from 'firebase/firestore';





  function App() {
    const [newList,setNewList] = useState("");
  const [todos,setTodos]= useState([]);
  const [input,setInput]=useState('');
  const listCollectionRef =collection(db,"users");
 

 useEffect(() => {

  const getUsers =async ()=>
  {
const data=await getDocs(listCollectionRef);
console.log(data);



setTodos(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
  };
  getUsers();
  


 }, []);
 const addList = async ()=>{
   await setDoc(doc(db,"users"),{name:"newList"});
    

  };
  
  return (
    <div className="App">
     hello
     
     <form>
     <FormControl>
  <InputLabel >write an item </InputLabel>
  <Input  onChange={(event) =>{setNewList(event.target.value)}}  />
  
  <button onClick={addList}>add list</button>

 {/* {todos.map(todo=>{
    return ( 
      <div>
        {""}
        message: {todo}
        </div>
    )
  })}*/}
  

</FormControl>
    
   {/*}  <Button disabled={!input} onClick={addTodo} varient="contained" color="primary"> add</Button>{*/}
     </form>
     
       {todos.map((user) => {
         return (
           <div>
           {""}
         
         
         {user.name}
         </div>
         )
       })}
       {/*todos.map(todo =>(
         <Todo text={todo}/>
       ))*/}
     
    </div>
  );
}

export default App;
