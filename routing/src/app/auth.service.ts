import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmNlbG8uYWNhZEBnbWFpbC5jb20iLCJwYXNzd29yZCI6MTIzNDU2fQ.dJPr9bSMjLWCzvSlsD5q9W1gnSLNjVeT606TgCxwnfU";

  constructor() { }

  isAuthentication(): boolean{
    return !!sessionStorage.getItem("access-token");
  }

  login(email: string, password: string): boolean{
    if(email === "marcelo.acad@gmail.com" && password === "123456"){
      sessionStorage.setItem("acces-token", this.accessToken);
      return true;
    }

    return false;
  }

  logout(){
    sessionStorage.clear();
  }
}
