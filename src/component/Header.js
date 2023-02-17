/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Dog from "../assets/dog";
import AddTask from './AddTask';
import TaskList from './TaskList';
import './ComponentCSS.css'
export default function header() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showTask, setShowTask] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState('Show Task Bar')
    const [task, setTask] = useState()
    const toggle = () => {
        setShowTask(!showTask)
        const buttonText = showTask ? 'Show Task Bar' : 'Hide Task Bar'
        setText(buttonText)
    }
    const url = "https://63522c2b9d64d7c713102872.mockapi.io/api/task";

    const getTask = async () => {
        const data = await axios(url)
        setTask(data)
    }

    useEffect(() => {
        getTask()
    }, [])
    return (
        <div className='container text-white content-header'>
            <div className='content-header-dog'>
                <Dog />
                <h1 className='text-dark' style={{ fontSize: 'calc(1.475rem + 2.7vw)' }}>TASK TRACKER</h1>
            </div>
            <button className='text-white btn-header' onClick={toggle}>{text}</button>
            {showTask && <AddTask getTask={getTask} />}
            <TaskList task={task} getTask={getTask} />
        </div>
    )
}