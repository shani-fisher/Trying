import React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AddTask from "./addTask";
import ViewTask from "./viewTask";
function mapStateToProps(state){
  console.log(state.users);
    return {TasksList: state.tasks.TasksList,};
    }
export default connect((mapStateToProps)( function TaskMenu(props){
    const {UserId,TasksList} = props;
    const [useStateTasksList,setUseStateTasksList]=(TasksList)
    const [flag,setFlag]=useState(false)
    const [currentTask,setCurrentTask] = useState(null);
    useEffect(()=>{setUseStateTasksList(TasksList)},flag)
      return(
        <>

        <button onClick={setFlag(true)}  >להוספת משימה:</button>
        {flag&&<AddTask UserId={326201753} setFlag={setFlag}></AddTask>}
        </>
      )
}
)     
)
