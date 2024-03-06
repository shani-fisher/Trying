import { Provider } from 'react-redux';
import store from './redux/store';
import SignUp from './components/SignUp';
import Login from './components/Login';
import TaskMenu from './components/taskMenu';

import {  Routes, Route } from 'react-router-dom';
import Enter from './components/enter';
import AddTask from './components/addTask';

function App() {
  return (
   
           
      <div className="App">
   <Provider store={store}>
            <Routes>
         {/* <Switch> */}
     
      <Route path='/' element={<Enter/>}></Route>    
      <Route path='/signup' element={<SignUp/>}></Route>    
      <Route path='/login' element={<Login/>}></Route>    
      <Route path='/taskmenu' element={<TaskMenu/>}></Route>    
      <Route path='/addtask' element={<AddTask/>}></Route>    
        {/* </Switch> */}
    </Routes>
    </Provider>
      </div>
      
  );
}



export default App;

