import React, {useEffect, useState} from 'react'
import {taskAPI} from "../api/task-api";

export default {
    title: 'API-TASKS'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '2bf7cd4e-a575-42fc-8ffd-de4ca96891be'
        taskAPI.getTasks(todolistId)
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '2bf7cd4e-a575-42fc-8ffd-de4ca96891be'
        taskAPI.createTask(todolistId, 'SOME TASK!')
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'd76aceb4-d89e-4684-955e-d83ff83bc77b'
        const taskId = '7c08932e-6f86-4fbd-af65-222ef9766c6a'
        taskAPI.deleteTask(todolistId, taskId)
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'd76aceb4-d89e-4684-955e-d83ff83bc77b'
        const taskId = '7c08932e-6f86-4fbd-af65-222ef9766c6a'
        taskAPI.updateTask(todolistId, taskId, 'SOME NEW TITLE>>>>>>>>>>>>').then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

