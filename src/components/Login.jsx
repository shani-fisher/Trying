import React from "react";
import { useEffect,useRef,useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/action";
import axios from 'axios'

function mapStateToProps(state){
return {UsersList: state.users.UsersList};
}
export default connect( mapStateToProps)(function Login(props){
  useEffect(()=>{const response=axios.get('http://localhost:5000/users');console.log(response.data);},[]) 
  const {UsersList,dispatch}=props; /*{ FirstName: "shani", LastName: "fisher", Id: "326201753", Teacher: 0, phone: "0504108916" },*/
  let FirstNameRef=useRef('');
  let LastNameRef=useRef('');
  let IdRef=useRef('');
  let phoneRef=useRef('');
  let TeacherRef=useRef('');
  useEffect(function () {
    console.log("usersList", UsersList)
}, [, UsersList]);
const login=(()=>{
 
dispatch(addUser({FirstName:FirstNameRef.current.value,LastName:LastNameRef.current.value,Id:IdRef.current.value,Teacher:TeacherRef.current.checked,phone:phoneRef.current.value}))

})
  return(
    <>

    <label>שם פרטי</label>
    <input ref={FirstNameRef}></input>
    <br></br>
    <label> שם משפחה</label>
    <input ref={LastNameRef}></input>
    <br></br>
    <label>תעודת זהות</label>
    <input ref={IdRef}></input>
    <br></br>
    
    <label>טלפון </label>
    <input ref={phoneRef}></input>
    <br></br>
    <label>האם מורה?</label>
    <input type="checkbox" ref={TeacherRef}></input>
    <button onClick={login}>כניסה</button>
</>
  )
})
