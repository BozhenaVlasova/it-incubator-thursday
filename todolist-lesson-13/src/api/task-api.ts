import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
})

type TaskType = {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
export type GetTasksType = {
    error: string | null
    totalCount: number
    items: TaskType[]
}
export type CreateTaskType = {
    data: {
        items: TaskType[]
    }
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}
export type DeleteTaskType = {
    resultCode: number
    messages: string[]
    data: {
        items: TaskType[]
    }
}
export type UpdateTaskType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

export const taskAPI = {
    getTasks(todolistId: string) {
        return instance.get<GetTasksType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post<CreateTaskType>(`todo-lists/${todolistId}/tasks`,
            {title: title}
        )
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<DeleteTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId: string, title: string) {
        return instance.put<UpdateTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`,
            {title: title}
        )
    }
}
