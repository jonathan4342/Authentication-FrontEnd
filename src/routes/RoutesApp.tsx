import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { User } from '../pages/User'
export const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/user" element={<User />} />
            </Routes>    
        </Router>
    )
}
