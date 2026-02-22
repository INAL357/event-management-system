import {useState} from "react";

export default function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleLogin  = ()=>{

    }
    return(
      <section>
          <form>
              <label>Enter Email</label>
              <input type="email" placeholder="eg. example@gmail.com"  onChange={(e)=>setEmail(e.target.value)}/>
              <label>Enter Password</label>
              <input type="password" placeholder="123456" onChange={(e)=>setPassword(e.target.value)} />
          </form>
          <button onClick={handleLogin}>Login</button>s
      </section>
    )
}