import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom'
import CompletedTasks from './Components/CompletedTasks/CompletedTasks';
import ToDo from './Components/ToDo/ToDo';
import Calender from './Components/Calendar/Calender';
function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<ToDo></ToDo>}></Route>
                <Route path='/ToDo' element={<ToDo></ToDo>}></Route>
                <Route path='/CompletedTasks' element={<CompletedTasks></CompletedTasks>}></Route>
                <Route path='/Calendar' element={<Calender></Calender>}></Route>
            </Routes>
        </div>
    );
}

export default App;
