import React,{createContext,useCallback,useState,useContext } from 'react';
import api from '../services/api';



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
    token:string;
    signIn(credencials:SignInCredentials):Promise<void>;
    signOut():void;
    refreshUser(id:string,token:string):void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children})=>{
    const [data,setData]=useState<AuthState>(()=>{

        const token =localStorage.getItem('@Rhouse:token');
        const user =localStorage.getItem('@Rhouse:user');

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

        localStorage.setItem('@Rhouse:token',token);
        localStorage.setItem('@Rhouse:user',JSON.stringify(user))
    
        setData({token,user})
    },[])

    const refreshUser = useCallback(async ({token_received})=>{
        const token =localStorage.getItem('@Rhouse:token');
       
        if(token!=token_received){
            throw new Error("token must be same that loged");
        }
        
        const response = await api.get('usuarios/findUser',{headers:{
            Authorization:'Bearer '+token_received
        }})
        const user = response.data
        localStorage.setItem('@Rhouse:user',JSON.stringify(user))

        setData({token:token_received,user})
    },[])


    const signOut = useCallback(()=>{
        localStorage.removeItem('@Rhouse:token');
        localStorage.removeItem('@Rhouse:user')

        setData({} as AuthState);
    },[])

    return(
        <AuthContext.Provider value={{signIn,signOut,refreshUser,user:data.user,token:data.token}}>
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
