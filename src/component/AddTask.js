
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';

export default function addTask({ getTask }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        addNewTask(data)
    }
    const addNewTask = async (newTask) => {
        const url = "https://63522c2b9d64d7c713102872.mockapi.io/api/task";
        try {
            await axios.post(url, newTask);
        } catch (error) {
            console.log(error);
        }
        getTask();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="form-group text-dark">
                    <label htmlFor >Task</label>
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Enter Task" {...register("task", { required: true })} />
                </div>
            </div>
            <div>
                <div className="form-group text-dark">
                    <label htmlFor >Date</label>
                    <input type="datetime-local" className="form-control" name id aria-describedby="helpId" placeholder="dd/mm/yy --:-- --" {...register("date", { required: true })} />
                </div>
            </div>
            {Object.keys(errors) && (
                <ul className='error-container text-dark'>
                    {errors.task?.type === 'required' && (<li>Task is required</li>)}
                    {errors.date?.type === 'required' && (<li>DateTask is required</li>)}
                </ul>
            )}
            <button className='text-white btn-add-task'>SAVE</button>
        </form>

    )

}
