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
        <>
            {
                displayCompRecievingTaskArrayFromApp.map((task, index) => (
                    <div className="flex" key={index}>
                        <input type="checkbox" checked={task.completed} onClick={ () => changeCheckedStatus(task) }></input>
                        {
                            task.completed ? <p className="line-through">{task.taskName}</p>: <p>{task.taskName}</p>    
                        }
                        <button onClick={ ()=> deleteTask(task) }>Delete</button>
                    </div>
                ))
            }
        </>
    );


}
export default Display;