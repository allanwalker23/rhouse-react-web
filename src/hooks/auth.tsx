import React,{createContext,useCallback,useState,useContext } from 'react';
import api from '../services/api'

interface SignInCredentials{
    email:string;
    senha:string;
}

interface AuthState {
    token:string;
    user:object;
}
interface AuthContextData{
    user:object;
    signIn(credencials:SignInCredentials):Promise<void>;
    signOut():void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children})=>{
    const [data,setData]=useState<AuthState>(()=>{

        const token =localStorage.getItem('@NSpace:token');
        const user =localStorage.getItem('@NSpace:user');

        if(token && user){
            return {token,user:JSON.parse(user)}
        }

        return {} as AuthState;

    })
    const signIn = useCallback(async ({email,senha})=>{
        const response = await api.post('sessions',{
            email,
            senha
        })

        const {token,user}=response.data;

        localStorage.setItem('@NSpace:token',token);
        localStorage.setItem('@NSpace:user',JSON.stringify(user))
    
        setData({token,user})
    },[])

    const signOut = useCallback(()=>{
        localStorage.removeItem('@NSpace:token');
        localStorage.removeItem('@NSpace:user')

        setData({} as AuthState);
    },[])

    return(
        <AuthContext.Provider value={{user:data.user,signIn,signOut}}>
        {children}
        </AuthContext.Provider>
    )
}


export function useAuth():AuthContextData{
    const context =useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
