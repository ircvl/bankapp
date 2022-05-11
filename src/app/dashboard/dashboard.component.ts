import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

user:any
  
  //depositform model
  depositForm = this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  //withdrawForm model
    withdrawForm = this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  
  loginDate:any
  acno:any

  constructor(private ds:DatabaseService,private fb:FormBuilder,private router:Router) { 
    this.user=JSON.parse(localStorage.getItem('currentUser')||'')
    this.loginDate = new Date
    
  }



  

  ngOnInit(): void {

    // if(!localStorage.getItem("currentAcno")){
    //   alert('please Log In..!!!')
    //   this.router.navigateByUrl("")
    // }

  }

  //deposit
  deposit(){
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

    if(this.depositForm.valid){
    //calling deposit in ds
     this.ds.deposit(acno,pswd,amount)
     .subscribe((result:any)=>{
      if(result){
        alert(result.message)
  
      }
     },
     (result)=>{
       alert(result.error.message)
     })
    }
  }

  //withdraw
  withdraw(){
    var acno = this.withdrawForm.value.acno
    var pswd = this.withdrawForm.value.pswd
    var amount = this.withdrawForm.value.amount

    if(this.withdrawForm.valid){
    //calling withdrw in ds
    this.ds.withdraw(acno,pswd,amount)
    .subscribe((result:any)=>{
      if(result
        ){
        alert(result.message)
      }
    },
    (result)=>{
      alert(result.error.message)
    })
   
    }
  }

//logout
logout(){
 localStorage.removeItem('currentUser')
 localStorage.removeItem('currentAcno')
 this.router.navigateByUrl("")
}

    //to delete account
    deletefromParent(){
      this.acno = JSON.parse(localStorage.getItem("currentAcno")||'')

    }

    //oncancel
    onCancel(){
      this.acno = ""
    }

//ondelete
    onDelete(event:any){
      this.ds.onDelete(event)
    .subscribe((result:any)=>{
      if(result ){
        alert(result.message)
        this.router.navigateByUrl("")
      }
    },
    (result:any)=>{
      alert(result.error.message)
    })
   
     }

}
