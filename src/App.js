
import './App.css';
import React , {useState, useEffect} from 'react'

function App() {
  const[users,setUsers] = useState([])
  const[text,setText] = useState([])
  const[suggestions,setSuggestions] = useState([])
  useEffect(()=>{
    fetch('https://reqres.in/api/users?page=2')
    .then((response)=>response.json)
    .then((result)=>
    setUsers(result.data.data))
  },[])

  function onChangeHandler(text){
  
    let matches = []
    if(text.length > 0){
      matches = users.filter(user => {
        const regex = new RegExp('${text}',"gi");
        return user.email.match(regex)
      })
    }
    console.log('matches', matches)
    setSuggestions(matches)
    setText(text)
  }

  return (
    <div className="App">
    <div>{text} </div>
    <input type="text" onChange={e=>onChangeHandler(e.target.value)} value={text}/>
    </div>
  );
}

export default App;
