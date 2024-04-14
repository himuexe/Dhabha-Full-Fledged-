import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const AuthCallbackPage = () => {
    const hasCreatedUser = useRef(false);
    const navigate = useNavigate();
    const {user} = useAuth0();
    const {createUser} = useCreateMyUser(); // to make useEffect work only once 
    useEffect(()=>{ // to create a new myUser if the user is not already in our database.
        if(user?.sub && user.email && !hasCreatedUser.current){
            createUser({auth0Id: user.sub, email:user.email})
            hasCreatedUser.current = true;
        }
        navigate("/");
    },[createUser, navigate, user])
  return (
    <div>Loading...</div>
  )
}

export default AuthCallbackPage