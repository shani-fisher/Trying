import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AddTask from "./addTask";
import ViewTask from "./viewTask";
function mapStateToProps(state){
  console.log(state);
    return { TasksList: state.tasks.TasksList};
    }
export default connect(mapStateToProps)( function TaskMenu(props){
    const {UserId,TasksList} = props;
    // const [useStateTasksList,setUseStateTasksList]=useState(TasksList)
    const [flag,setFlag]=useState(false)
    const [currentTask,setCurrentTask] = useState(null);
    const thisUserTasks=TasksList.filter(x=>x.UserTaskId===UserId);
useEffect(()=>{console.log(`tasks:`,TasksList)},[TasksList])
    // useEffect(()=>{setUseStateTasksList(TasksList)},flag)
      return(
        <>
        <ul>
          {thisUserTasks.map(x=>(<li><label>{x.TaskName}</label> <button onClick={()=>setCurrentTask(x.TaskId)}>לפרטי המשימה:</button><br></br>{currentTask===x.TaskId&&<ViewTask thisTask={x}></ViewTask>}</li>))}
        </ul>
        <button onClick={()=>setFlag(!flag)} >להוספת משימה:</button>
          {flag&&<AddTask UserId={UserId} setFlag={setFlag}  ></AddTask>} 
      </> 
      )
}
)     
