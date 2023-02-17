import React from 'react'
import axios from 'axios'
export default function taskList({ task, getTask }) {
    const showTaskList = task?.data.map((item, index) => {
        const { id, task, date } = item;
        return (
            <div className="card text-left text-white mt-5 content-task-list" >
                <div className="card-body" key={index}>
                    <h4 className="card-title">{task}</h4>
                    <h4 className="card-text">{date}</h4>
                    <button onClick={() => {
                        deleteTask(id)
                    }} className='btn-task-list'><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        )
    })
    const deleteTask = async (id) => {
        const url = 'https://63522c2b9d64d7c713102872.mockapi.io/api/task'
        try {
            await axios.delete(`${url}/${id}`)
        } catch (error) {
            console.log(error)
        }
        getTask()
    }
    return (
        <div>
            {showTaskList}
        </div>

    )
}
