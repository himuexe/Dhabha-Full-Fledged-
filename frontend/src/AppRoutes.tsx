import Layout from './layouts/Layout';
import {Routes,Route,Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import UserProfilePage from './pages/UserProfilePage'; 

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<Layout showHero><HomePage></HomePage></Layout>}></Route>
            <Route path='/auth-callback' element={<AuthCallbackPage></AuthCallbackPage>}/>
            <Route path='/user-profile' element={<Layout><UserProfilePage></UserProfilePage></Layout>}></Route>
            <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
    );
};
export default AppRoutes;