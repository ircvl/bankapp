import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim="your perfect banking partner"
account="account number please!!!"
acno=""
pswd=""

//database 
  dataBase:any ={
    1000:{acno:1000,uname:"dani",password:1000,balance:1000},
    1001:{acno:1001,uname:"pt",password:1001,balance:2000},
    1002:{acno:1002,uname:"saman",password:1002,balance:3000},

  }
  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
  this.acno=event.target.value
  console.log(this.acno);
  
}

  pswdChange(event:any){
    this.pswd= event.target.value
    console.log(this.pswd);
    
  }

//   // using event binding 
//   login(){
//  // user acno n pswd

//     var acno = this.acno
//     var pswd = this.pswd

//     var Database = this.dataBase

//     if (acno in Database){
//        if(pswd == Database[acno]["password"]){
  
//         alert("login successful!!!!!")
//       }else{
//         alert("invalid password!!!!!")
//       }

//     }else{
//       alert("user doesnt exist!!!")
//     }



//   }

 
 login(a:any,p:any){
  
      console.log(a.value);
      console.log(p.value);
      
// user entered acno n psd 
     var acno = a.value
     var pswd = p.value
 
     var Database = this.dataBase
 
     if (acno in Database){

          if(pswd == Database[acno]["password"]){
 
          alert("login successful!!!!!")
          
          }else{
          
            alert("invalid password!!!!!")
          }
 
     }else{

       alert("user doesnt exist!!!")
     
      }
   }
 
 }

