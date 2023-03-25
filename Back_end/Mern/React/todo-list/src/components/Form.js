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
        <>
            <form onSubmit={ formSubmitForTask }>
                <label>
                    Task: <input name="taskName" type="text" onChange={ changeHandler } value={task.taskName} />
                </label>
                <button>Submit</button>
            </form>
        </>
    );

}
export default Form;