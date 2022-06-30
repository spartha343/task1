import React from 'react';
import './ToDo.css'

const ToDo = () => {

    const deleteElement = (e) => {
        console.log(this);
    };

    let taskList = [];
    const updateTaskList = () => {
        const newTask = document.getElementById('newTask').value;
        taskList = [...taskList, { newTask }];
        document.getElementById('newTask').value = '';
        document.getElementById('taskToBeFinished').innerHTML = '';
        taskList.map(task => {
            const li = document.createElement('li');
            li.innerHTML = `<input type="radio" onclick=${{ deleteElement }}/> ${task.newTask}  <button>Edit</button > `;
            document.getElementById('taskToBeFinished').appendChild(li);
            return 0;
        });
        console.log(taskList);
    };
    return (
        <div>
            <div>
                <h1 className='m-5 text-xl'>Please, Enter your today's task:</h1>
                <ol id='taskToBeFinished' className='ml-5'>
                </ol>
            </div>

            <h1 className='ml-5 text-lg mt-7'>You can add a new task in the text box below :</h1>
            <textarea name="" id="newTask" cols="30" rows="10" className='border-2 h-40 w-96 m-5'></textarea> <br />
            <button onClick={updateTaskList} className="rounded bg-sky-600 p-2 text-white ml-5">Add task</button>
        </div >
    );
};

export default ToDo;