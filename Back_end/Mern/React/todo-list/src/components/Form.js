import React, {useState} from 'react';

const Form = (props) => {
    const {tansferTaskArray, setTransferTaskArray} = props;
    const [task, setTask] = useState({
        taskName: '',
        completed: false
    });

    const changeHandler = (e) => {
        setTask({
            ...task, [e.target.name]:e.target.value
        })
    }

    const formSubmitForTask = (e) => {
        e.preventDefault();

        setTransferTaskArray([...tansferTaskArray, task]);
        setTask({
            taskName: '',
            completed:false
        });
    }

    return (
        <form onSubmit={ formSubmitForTask }>
            <div className="form">
                <label>Task:</label>
                <input name="taskName" type="text" onChange={ changeHandler } value={task.taskName} />
                <button>Add</button>
            </div>
        </form>
    );

}
export default Form;