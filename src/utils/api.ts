import { axiosInstance } from "./axiosInstance";

interface CreateUserParams {
    name: string,
    email: string,
    password: string
}

interface LoginUserParams {
    email: string,
    password: string
}
export async function createUser({name, email, password} : CreateUserParams ) {
    try {
        const userRes = await axiosInstance.post('/users', {name, email, password})
        return userRes.data;
    } catch (e) {
        throw e;
    }
}

export async function loginUser({email, password} : LoginUserParams ) {
    try {
        const res = await axiosInstance.post('/login', {email, password})
    return res.data;
    } catch (e) { throw e; }
}