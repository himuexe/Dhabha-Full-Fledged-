import Layout from './layouts/Layout';
import {Routes,Route,Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage';
const AppRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<Layout><HomePage></HomePage></Layout>}></Route>
            <Route path='/user-profile' element={<span>USER PROFILE PAGE</span>}></Route>
            <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
    );
};
export default AppRoutes;