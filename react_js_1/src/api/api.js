import axios from "axios";

const instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "e8ed24d0-23ee-4a45-8d1a-2b102b174965"
        }
});

export const usersAPI = {
    getUsers: (currentPage, usersCountPage) => instans.get(`users?page=${currentPage}&count=${usersCountPage}`).then((response) => response.data),
    
}

export const followAPI = {
    postFollowed: (id) => instans.post(`follow/${id}`).then((response) => response.data),
    deleteFollowed: (id) => instans.delete(`follow/${id}`).then((response) => response.data)
}

export const profileAPI = {
    getProfile: (id) => instans.get(`profile/${id}`).then((response) => response.data),
    getStatus: (id) => instans.get(`profile/status/${id}`).then((response) => response.data),
    updateStatus: (status) => instans.put(`profile/status`, {status: status}).then((response) => response.data),
}

export const authAPI = {
    getMe: () => instans.get(`auth/me`).then((response) => response.data),
    login: (email, password, rememberMe) => instans.post('auth/login', {email, password, rememberMe}).then((response => response.data)),
    logout: () => instans.delete('auth/login').then((response => response.data)),

}
