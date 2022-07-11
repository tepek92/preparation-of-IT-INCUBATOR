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
    getProfile: (id) => instans.get(`profile/${id}`).then((response) => response.data)
}

export const authAPI = {
    getMe: () => instans.get(`auth/me`).then((response) => response.data.data)
}
