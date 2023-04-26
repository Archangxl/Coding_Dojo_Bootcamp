import React from "react";

const Display = (props) => {

    const {displayCompRecievingTaskArrayFromApp, setDisplayCompRecievingTaskArrayFromApp} = props;

    const changeCheckedStatus = (task) => {
        const updatedTaskList = displayCompRecievingTaskArrayFromApp.map((taskChanging) => {
            if (taskChanging === task) {
                task.completed = !task.completed;
            }
            return taskChanging
        })
        setDisplayCompRecievingTaskArrayFromApp(updatedTaskList);
    }

    const deleteTask = (task) => {
        const updatedTaskList = displayCompRecievingTaskArrayFromApp.filter((taskGettingDeleted) => taskGettingDeleted !== task);
        setDisplayCompRecievingTaskArrayFromApp(updatedTaskList);
    }

    return (
        <div>
            {
                displayCompRecievingTaskArrayFromApp.map((task, index) => (
                    <div className="task-list" key={index}>
                        {
                            task.completed ? <p className="line-through">{task.taskName}</p>: <p>{task.taskName}</p>    
                        }
                        <input type="checkbox" checked={task.completed} onClick={ () => changeCheckedStatus(task) }></input>
                        <button onClick={ ()=> deleteTask(task) }>Delete</button>
                    </div>
                ))
            }
        </div>
    );


}
export default Display;