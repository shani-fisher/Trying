import React from "react";
//     {TaskId:1,TaskTypeId:1,TaskName:"homework in react",UserTaskId:"326201753",DeadLine:"12/12/2024"},

import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { deleteTaskFromList } from "../redux/action";
function mapStateToProps(state){
    return {TasksList: state.tasks.TasksList,
    TaskType:state.tasks.TaskType};
    }
    export default connect(mapStateToProps)(function ViewTask(props){
        const {thisTask,TaskType,TasksList,dispatch}=props
        function deleteThisTask(){
            dispatch(deleteTaskFromList(thisTask))
        }
        return(<>
        <p>שם:{thisTask.TaskName}<br></br>
        סוג משימה:{TasksList.find(x=>x.TaskTypeId===thisTask.TaskTypeId).TaskTypeName}<br></br>
         תאריך סיום המשימה:{thisTask.DeadLine};<br></br>
         <button onClick={deleteThisTask}>למחיקת המשימה:</button>
        </p>

        </>)
    })