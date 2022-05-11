import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private ds:DatabaseService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){

      var uname = this.registerForm.value.uname
      var acno = this.registerForm.value.acno
      var password = this.registerForm.value.pswd

       this.ds.register(uname,acno,password)
       .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl("")
        }
       },
       (result)=>{
        alert(result.error.message)
       }
       )

       
  }
}

