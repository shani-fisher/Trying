import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Enter(props){
    const n=useNavigate();
     return(
         <>
         <button onClick={()=>n("/login")}>הרשמה</button>{/*link to login */}
        
         <button onClick={()=>n("/signup")}>התחברות</button>{/*link to signup */}
         </>
  )
}