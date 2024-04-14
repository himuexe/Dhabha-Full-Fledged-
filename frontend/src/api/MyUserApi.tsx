import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query"; //give our own custom hooks

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
type CreateUserRequest = {
  auth0Id: string;
  email: string;
};
export const useCreateMyUser = () => {
  const {getAccessTokenSilently} = useAuth0(); //get accesstoken from auth0 hook

  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, { // sends a request to backend to create a user => index=> myUserRoute=>MyUserController
      method: "POST",
      headers: {
        Authorization:`Bearer ${accessToken}`, // if will check the token 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };
  const { // custom hooks
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);
  return { createUser, isLoading, isError, isSuccess};
};
