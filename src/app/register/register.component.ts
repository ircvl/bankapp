import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pswd=""

  constructor(private db:DatabaseService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){

      var uname = this.uname
      var acno = this.acno
      var password = this.pswd
      const result = this.db.register(uname,acno,password)

      if(result){
        alert("successfully registered")
        this.router.navigateByUrl("")
      }else{
        alert("user already exist!!")
      }
  }
}
