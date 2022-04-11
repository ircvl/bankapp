import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  //database 
  database:any ={
    1000:{acno:1000,uname:"dani",password:1000,balance:1000},
    1001:{acno:1001,uname:"pt",password:1001,balance:2000},
    1002:{acno:1002,uname:"saman",password:1002,balance:3000},

  }

  constructor() { }

  register(uname:any,acno:any,password:any){

    let database = this.database
    
    if(acno in database){
      //already exist 
      return false

    }else{
      //add data into databse
      database[acno]={
        uname,
        acno,
        password,
        balance:0
      }
      return true
    }
  }


  //login
  login(acno:any,pswd:any){
    // user acno n pswd
   
       let Database = this.database
   
       if (acno in Database){
          if(pswd == Database[acno]["password"]){
            //already exist 
            return true
   
         }else{
           alert("invalid password!!!!!")
           return false
         }
   
       }else{
         alert("user doesnt exist!!!")
         return false
       }
  }

  //deposit 
  deposit(acno:any,pswd:any,amt:any){

    var amount = parseInt(amt)

    let database = this.database

    if(acno in database){
      if(pswd == database [acno]["password"]){
        database[acno]["balance"] += amount
        return database[acno]["balance"]

      }else{
        alert("invalid password!!!")
        return false
      }

    }else{
      alert("user doesn't exist")
      return false
    }

  }

  //withdraw
  withdraw(acno1:any,pswd1:any,amount1:any){

    let database = this.database

    if(acno1 in database){
      if(pswd1 == database[acno1]["password"]){
        if(database[acno1]["balance"] >=amount1){
          database[acno1]["balance"] -= amount1
        return database[acno1]["balance"]

        }else{
          alert("insufficient balance!!!!!!")
        }
      }else{
        alert("invalid pasword!!!")
        return false
      }
    }else{
      alert("user already exist!!!")
      return false
    }
  }
}
