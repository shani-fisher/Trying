import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import axios from 'axios' ;
function mapStateToProps(state) {
    return { UsersList: state.users.UsersList };
}
export default connect(mapStateToProps)(function SignUp(props) {
    useEffect(()=>{const res=axios.get('http://localhost:5000/users');
     console.log(res.data)
},[]
   )
    const { UsersList } = props;
    let IdRef = useRef('');
    let FirstNameRef = useRef('');
    const [key,setKey]=useState(0)
   function signUp(){
        debugger
        const user = UsersList.find( x=> x.Id === IdRef.current.value && x.FirstName === FirstNameRef.current.value)
        if (!user) {
           alert("this id not found!")
            setKey(key+1)
        }
        else {
            alert(`hellow to ${FirstNameRef.current.value} !!`)

        }
    }
    return (
        <>
            <label>שם פרטי</label>
            <input ref={FirstNameRef}></input><br></br>
            <label>תעודת זהות</label>
            <input ref={IdRef}></input><br></br>
            <button onClick={signUp}>להתחברות</button>
            <SignUp key={key}/>
        </>
    )
})