import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

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


  constructor(private router:Router,private ds:DatabaseService) { }

  ngOnInit(): void {
  }



  login(){
 // user entered acno n pswd

    var acno = this.acno
    var pswd = this.pswd
    
    //call login in dataserevice

    const result = this.ds.login(acno,pswd)
    if(result){
      alert("login successful!!!!!")
        this.router.navigateByUrl("dashboard")
    }
  }
 
 }

