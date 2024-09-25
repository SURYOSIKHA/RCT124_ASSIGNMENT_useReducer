import React, { act, useReducer } from 'react'
const initialstate={
    email:"",
    password:"",
    loading:false
}
const reducer=(state, action)=>{
    switch(action.type){
        case "addemailpassword":
            return{
                ...state,
                ...action.payload
            }
        case "setloading":
            return{
                ...state,
                loading:true
            }
        case "reset":
            return{
                email:"",
                password:"",
                loading:false
            }
    }
}
const Addform = () => {
    const[state, dispatch] = useReducer(reducer, initialstate)
    const{email, password, loading} = state
    function handleclick(e){
        e.preventDefault()
        if(email && password){
            dispatch({
                type:"setloading"
            })
        }else{
            alert("fill all the details")
        }
    }
    function handlereset(e){
        e.preventDefault()
        dispatch({
            type:"reset"
        })
    }
  return (
    <div>
        {
            loading == false ? <div>No details found</div>:
            <div>
                <div>User Email:{email}</div>
                <div>User Password:{password}</div>
            </div>
        }
        <form action="">
            <label htmlFor="">Email</label>
            <input type="email" id="email" 
            onChange={(e)=>dispatch({
                type:"addemailpassword",
                payload:{
                    [e.target.id] : e.target.value
                }
            })}
            value={email}
            placeholder='email'/>
            <label htmlFor="">Password</label>
            <input type="password" id="password" 
            onChange={(e)=>dispatch({
                type:"addemailpassword",
                payload:{
                    [e.target.id] : e.target.value
                }
            })}
            value={password}
            placeholder='password'/>
            <button onClick={handleclick}>Submit</button>
            <button onClick={handlereset}>Reset</button>
        </form>
    </div>
  )
}

export default Addform