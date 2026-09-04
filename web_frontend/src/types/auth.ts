export interface User{
    id: number;
    nombre: string;
    correo: string;
    rol: string;
    estado: boolean;
}
export interface LoginRequest{
    correo: string;
    password: string;
}
export interface AuthContextType{
    user: User | null;
    loading: boolean;
    isAuthenticated: boolean;
    login: (data: LoginRequest) => Promise<void>;
    logout: () => Promise<void>;    
}
