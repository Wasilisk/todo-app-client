import * as axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:5000/api/"
})


export const authApi = {
    registration(username, email, password) {
        return instance.post('user/registration', {username, email, password})
            .then(response => response.data)
            .catch((error) => {
                if (error.response) {
                    return(error.response.data);
                }
            })
    },
    login(email, password) {
        return instance.post('user/login', {email, password})
            .then(response => response.data)
            .catch((error) => {
                if (error.response) {
                    return(error.response.data);
                }
            })
    },
}

export const taskApi = {
    getAll(userId) {
        return instance.get(`task/${userId}`)
            .then(response => response.data)
    },
    completeTask(taskId) {
        return instance.post(`task/complete/${taskId}`)
    },
    deleteTask(taskId) {
        return instance.delete(`task/delete/${taskId}`)
    },
    addTask(userId, description, categoryId) {
        return instance.post(`task/create/`, {userId, description, categoryId})
            .then(response => response.data)
    }
}

export const categoryApi = {
    getAll(userId) {
        return instance.get(`category/${userId}`)
            .then(response => response.data)
    },
    addCategory(name, userId) {
        return instance.post(`category/create/`, {name, userId})
            .then(response => response.data)
    },
    deleteCategory(categoryId) {
        return instance.delete(`category/delete/${categoryId}`)
    }
}