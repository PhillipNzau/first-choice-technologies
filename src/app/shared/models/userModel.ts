export interface LoginUserInterface {
    email:string,
    password:string
}

export interface UserInterface {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    get_full_name: string,
  }
  

export interface TokenInterface {
   expiry_time: string,
   lifetime: string,
   access: string,
   refresh: string,
}

export interface UserModelInterface {
    user: UserInterface,
    token: TokenInterface
}

export interface RefreshTokenInterface {
    access: string,
    refresh: string
}