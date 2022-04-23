import { Component, OnInit } from '@angular/core';
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

  


  constructor(private ds:DatabaseService,private fb:FormBuilder,private router:Router) { 
    this.user=this.ds.currentUser
  }
  

  ngOnInit(): void {

    if(!localStorage.getItem("currentAcno")){
      alert('please Log In..!!!')
      this.router.navigateByUrl("")
    }

  }

  //deposit
  deposit(){
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

    if(this.depositForm.valid){
    //calling deposit in ds
    const result = this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount + "deposited successfully.... And new balace is:" + result)

    }else{
      alert('invalid form!!')
    }
  }
  }

  withdraw(){
    var acno = this.withdrawForm.value.acno
    var pswd = this.withdrawForm.value.pswd
    var amount = this.withdrawForm.value.amount

    if(this.withdrawForm.valid){
    //calling withdrw in ds
    const result = this.ds.withdraw(acno,pswd,amount)
    if(result>=0){
      alert(amount + "withdrawed successfully.. And new balance is:" + result)
    }
  }else{
    alert('invalid form')
  }
  }

//logout
logout(){
 localStorage.removeItem('currentUser')
 localStorage.removeItem('currentAcno')
 this.router.navigateByUrl("")
}

}
