import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  currentUser: any
  currentAcno: any

  //database 
  database:any ={
    1000:{acno:1000,uname:"sasi",password:1000,balance:1000,transaction:[]},
    1001:{acno:1001,uname:"soman",password:1001,balance:2000,transaction:[]},
    1002:{acno:1002,uname:"sapi",password:1002,balance:3000,transaction:[]},

  }

  constructor() {
    this.getDetails()
   }

  //to save  datas in localstorage
  saveDetails(){
    localStorage.setItem("database",JSON.stringify(this.database))
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
  }

  // to get data from localstorage
  getDetails(){
    if(localStorage.getItem("database")){
      this.database =JSON.parse(localStorage.getItem("database")||'')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser =JSON.parse(localStorage.getItem("currentUser")||'')
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno = JSON.parse(localStorage.getItem("currentAcno")||'')
    }
  }

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
        balance:0,
        transaction:[]
        
      }
      this.saveDetails()
      return true
    }
  }


  //login
  login(acno:any,pswd:any){
    // user acno n pswd
   
       let Database = this.database
   
       if (acno in Database){

          if(pswd == Database[acno]["password"]){
            this.currentUser=this.database[acno]["uname"]
            this.currentAcno = acno
            //already exist 
            this.saveDetails()
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
        database[acno]["transaction"].push({
          type:"CREDITED",
          amount:amount
        })
        this.saveDetails()
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
          database[acno1]["transaction"].push({
            type:"DEBITED",
            amount:amount1
          })
          this.saveDetails()
          
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

  //transaction
  transaction(acno:any){
    return this.database[acno].transaction

  }


}
