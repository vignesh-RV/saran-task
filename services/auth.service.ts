import { Injectable } from '@angular/core';
import { AuthModel } from 'model/auth-model';
import { authData } from 'model/constant/mockData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  validateUserData(formValue){
   let user = Object.keys(authData).find((userKey)=>{
      return authData[userKey].name ==  formValue.username && authData[userKey].password ==  formValue.password;
    });
    return authData[user];
  }

  persistLoggedUserData(formValue): any{
    localStorage.setItem("userData", JSON.stringify(formValue));
  }

  getLoggedInUserData():any{
    let userData =  JSON.parse(localStorage.getItem("userData"));
    return userData;
  }

  isLoggedInUserIsAdmin(): any{
    let userData = this.getLoggedInUserData();
    if(userData && userData.permission == "all"){
      return true;
    }else return false;
  }

  doLogout(): any{
    localStorage.clear();
  }
}
