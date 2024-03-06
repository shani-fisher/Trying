import { addTaskToList } from "../redux/action";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

function mapStateToProps(state){
    return {TaskType: state.tasks.TaskType,
        TasksList: state.tasks.TasksList};
    }
export default connect(mapStateToProps)(function AddTask(props){
    const{TaskType,dispatch,UserId,setFlag,TasksList}=props
    //     {TaskId:1,TaskTypeId:1,TaskName:"homework in react",UserTaskId:"326201753",DeadLine:"12/12/2024"},
    let TaskIdRef=useRef('')
    let TaskTypeIdRef=useRef('')
    let TaskNameRef=useRef('') 
    let DeadLineRef=useRef('')
    function addThisTask(){  

    dispatch(addTaskToList({TaskId:TaskIdRef.current.value,TaskTypeId:TaskTypeIdRef.current.value,TaskName:TaskNameRef.current.value,UserTaskId:UserId,DeadLine:DeadLineRef.current.value}))
   setFlag(false);
}
    return(<>
    <label>task id</label>
    <input type="number" ref={TaskIdRef} />
    <br />
    <select ref={TaskTypeIdRef}>
        <option > id בחר </option>
         {TaskType.map(x=><option key={x.TaskTypeId} value={x.TaskTypeName}>{x.TaskTypeName}</option>)}
    </select>
    <br/>
    <label >שם המשימה</label>
    <input type="text" ref={TaskNameRef} />
    <label>DeadLine</label>
    <input type="date" ref={DeadLineRef} />
    <button onClick={addThisTask}>להוספת המשימה</button>
    </>)
})