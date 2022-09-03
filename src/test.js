import { useState } from "react";


function Test(){

    var [name,setName]=useState('');
    var [password,setPassword]=useState('');
    var [NameError,setNmaeError]=useState('');
    var [PasswordError,setPasswordError]=useState('');

    function handleName(e){
      setName(e.target.value)
    }

    function handlePassword(e){
      setPassword(e.target.value)
    }


    function validate(e){
       if(name.length==0){
        e.preventDefault()
        setNmaeError("Name is empty")
       }

       else{
        setNmaeError("");
       }

       if(password.length==0){
        e.preventDefault()
        setPasswordError("Password is empty")
       }

       else{
        setPasswordError("");
       }
    }

    return <div>

     <input type="text" onChange={handleName}/> <br/>
     <div>{NameError}</div>
     <input type="password" onChange={handlePassword}/>
     <div>{PasswordError}</div>
     <button onClick={validate}>login</button>



    </div>

}

export default Test;