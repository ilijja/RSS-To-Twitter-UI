import { getAuthToken } from "@/util/auth";
import { redirect } from "react-router-dom";

const MainPage = () => {
    return <>
        <h1>ok</h1>
    </>
}

export async function loader(){

    const token = getAuthToken()

    if(token){
        return redirect('/home')
    }

    return null
}

export default MainPage;