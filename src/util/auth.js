import { redirect } from "react-router-dom"

export function getAuthToken(){
    const token = localStorage.getItem('token')
    return token
}

export function checkAuthLoader(){
    const token = getAuthToken()

    if(!token){
        return redirect('/login')
    }

    return null;
}

export function checkIfLogged(){
    const token = getAuthToken()

    if(token){
        return redirect('/home')
    }

    return null;
}

export function tokenLoader(){
    return getAuthToken()
}