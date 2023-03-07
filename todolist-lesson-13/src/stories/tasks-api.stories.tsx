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
        const todolistId = '2bf7cd4e-a575-42fc-8ffd-de4ca96891be'
        const taskId = 'fabccde5-53ff-4677-a085-e7fa69ee967f'
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
        const todolistId = '2bf7cd4e-a575-42fc-8ffd-de4ca96891be'
        const taskId = '5ca196fd-aa7c-49d7-b522-c49543ef1ec7'
        taskAPI.updateTask(todolistId, taskId, {
            title: 'SOME NEW TITLE>>>>>>>>>>>>',
            description: 'd1',
            status: 2,
            priority: 2,
            startDate: '',
            deadline: ''}).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

