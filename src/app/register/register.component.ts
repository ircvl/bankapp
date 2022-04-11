import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //registerform model
  registerForm = this.fb.group({
    uname:[''],
    acno:[''],
    pswd:['']
  })


  constructor(private db:DatabaseService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){

      var uname = this.registerForm.value.uname
      var acno = this.registerForm.value.acno
      var password = this.registerForm.value.pswd

      const result = this.db.register(uname,acno,password)

      if(result){
        alert("successfully registered")
        this.router.navigateByUrl("")
      }else{
        alert("user already exist!!")
      }
  }
}
