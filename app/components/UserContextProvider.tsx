import { getUserDetails, userGoogleRegister, userGoogleSignIn, userRegister, userSignIn } from "@/utils/api"
import { ReactNode, createContext, useState } from "react"

export const userContext = createContext<{ user: any, refreshUser: () => void, signIn: ({ email, password, token }: { email: string, password: string, token?: string }) => any, register: ({ username, email, password, token }: { username: string, email: string, password: string, token?: string }) => any, clearUser: () => void }>({
    user: null,
    refreshUser: () => {},
    signIn: () => {},
    register: () => {},
    clearUser: () => {},
})

const UserContextProvider = ({children} : {children: ReactNode}) => {
    const [userData, setUserData] = useState(null)

    const refreshUser = async () => {
        try {
            const {data} = await getUserDetails();
            setUserData(data?.user);
        } catch (err) {
            console.log(err)
        }
    }

    const clearUser = () => {
        setUserData(null);
    }

    const signIn = async ({email, password, token}) => {
        try {
            let response = null;

            if (token) {
                response = await userGoogleSignIn({ token });
            } else {
                response = await userSignIn({
                    email,
                    password
                })
            }

            setUserData(response.data.user);
            return {
                success: response.data.success,
                error: response.data.error
            }
        } catch (error) {
            return { 
                error: error.response.data.error,
                success: false
            }
        }
    }

    const register = async ({ email, username, password, token }) => {
        try {
            let response = null;

            if (token) {
                response = await userGoogleRegister({ token });
            } else {
                response = await userRegister({
                    email,
                    password,
                    username
                })
            }
            setUserData(response.data.user);
            return {
                success: response.data.success,
                error: response.data.error
            }
        } catch (error) {
            return { 
                error: error.response.data.error,
                success: false
            }
        }
    }

    return <userContext.Provider value={{ refreshUser, user: userData, signIn, register, clearUser }}>{children}</userContext.Provider>
}

export default UserContextProvider;