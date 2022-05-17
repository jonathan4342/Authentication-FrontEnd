import { useNavigate } from "react-router-dom"
import { ButtonLogin, RedirectItem } from "../styles/GoblaStyles"

export const Redirect = () => {
    const navigate=useNavigate()
    
    const login=()=>{
        navigate('/')
    }
    return (
        <RedirectItem>
            <h2>You must be logged in to be able to access this view.</h2>
            <ButtonLogin onClick={login}>
            return to login
            </ButtonLogin>
        </RedirectItem>
    )
}
