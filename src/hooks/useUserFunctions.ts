import { createUser, loginUser } from "@/utils/api"
import { useMutation, UseMutationResult } from "@tanstack/react-query"


interface CreateUserParams {
    name: string;
    email: string;
    password: string;
}

interface LoginUserParams {
    email: string;
    password: string;
}

interface UserMutation {
    (): UseMutationResult<any, unknown, CreateUserParams, unknown>;
}

interface LoginMutation {
    () : UseMutationResult<any, unknown, LoginUserParams, unknown>;
}


export function useUserFunctions() {

    return {
        userMutation,
        userLogin
    };
}

const userLogin: LoginMutation = () => {
    return useMutation({
        mutationKey: ['post', 'login'],
        mutationFn: loginUser,
    });
};

const userMutation: UserMutation = () => {
    return useMutation({
        mutationKey: ['post', 'users'],
        mutationFn: createUser,
    });
};







